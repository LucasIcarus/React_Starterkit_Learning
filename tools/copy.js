/**
 * React Starter Kit Learning & Custumize
 *
 * Most Code From Original React Starter Kit
 *
 * Created by Fancy-PC on 2016/5/29 0029.
 */

import path from 'path';
import gaze from 'gaze';
import replace from 'replace';
import Promise from 'bluebird';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
async function copy({watch} = {}) {
	const ncp = Promise.promisify(require('ncp'));

	// Do the copy stuff by ncp(node-copy)
	await Promise.all([
		ncp('src/public', 'build/public'),
		ncp('src/content', 'build/content'),
		ncp('package.json', 'build/package.json'),
	]);

	// change the key script(start) in the package.json of build folder
	replace({
		regex: '"start".*',
		replacement: '"start": "node server.js"',
		paths: ['build/package.json'],
		recursive: false,
		silent: false,
	});

	// watch the content file and when change occur copy or overwrite the changing file
	if (watch) {
		const watcher = await new Promise((resolve, reject) => {
			gaze('src/content/**/*.*', (err, val) => err ? reject(err) : resolve(val));
		});
		watcher.on('changed', async(file) => {
			const relPath = file.substr(path.join(__dirname, '../src/content/').length);
			await ncp(`src/content/${relPath}`, `build/content/${relPath}`);
		});
	}
}

export default copy;
