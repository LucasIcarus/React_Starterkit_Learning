/**
 * React Starter Kit Learning & Custumize
 *
 * Most Code From Original React Starter Kit
 *
 * Created by Fancy-PC on 2016/5/29 0029.
 */

import fs from 'fs';
import mkdirp from 'mkdirp';

const writeFile = (file, contents) => new Promise((resolve, reject) => {
	fs.writeFile(file, content, 'utf-8', err => err ? reject(err) : resolve());
});

const makeDir = (name) => new Promise((resolve, reject) => {
	mkdirp(name, err => err ? reject(err) : resolve());
});

export default {writeFile, makeDir};
