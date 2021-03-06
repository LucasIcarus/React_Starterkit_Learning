/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Router from 'react-routing/src/Router';
import fetch from './core/fetch';
import App from './components/App';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const router = new Router(on => {

	// handle any request with some content wrapper by <App>
	on('*', async(state, next) => {
		const component = await next();
		return component && <App context={state.context}> {component}</App>;
	});

	on('/contact', async() => <ContactPage />);

	on('/login', async() => <LoginPage />);

	on('/register', async() => <RegisterPage />);

	// search the graphQL with query to fill the <ContentPage> as component of <App>
	on('*', async(state) => {
		const query = `/graphql?query={content(path:"${state.path}"){path,title,content,component}}`;
		const response = await fetch(query);
		const {data} = await response.json();
		return data && data.content && < ContentPage {...data.content}/>;
	});
	
	// handle the error
	on('error', (state, error) => state.statusCode === 404 ?
		<App context={state.context} error={error}> <NotFoundPage /> </App> :
		<App context={state.context} error={error}> <ErrorPage /> </App>);
});

export default router;
