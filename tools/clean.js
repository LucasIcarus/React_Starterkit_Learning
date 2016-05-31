/**
 * React Starter Kit Learning & Custumize
 *
 * Most Code From Original React Starter Kit
 *
 * Created by Fancy-PC on 2016/5/29 0029.
 */

import del from 'del';
import fs from './lib/fs';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
	await del(['.tmp', 'build/*', '!build/.git'], {dot: true});
	await fs.makeDir('build/public');
}

export default clean;
