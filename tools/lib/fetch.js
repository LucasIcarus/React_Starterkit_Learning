/**
 * React Starter Kit Learning & Custumize
 *
 * Most Code From Original React Starter Kit
 *
 * Created by Fancy-PC on 2016/5/29 0029.
 */

import http from 'http';

// *
// change the http.get to asynchronous way
// --------------------------------------------------------------------------------
export default async (url) => new Promise((resolve, reject) => {
	http.get(url, res => resolve(res)).on('error', err => reject(err));
});
