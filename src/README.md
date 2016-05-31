```

.                    
├── /actions/               	# Action creators that allow to trigger a dispatch to stores(not in use)
├── /stores/                	# Stores contain the application state and logic(not in use)
├── /constants/             	# Constants (action types etc.)(not in use)
├── /components/            	# React components
├── /content/               	# Static content (plain HTML or Markdown, Jade, you name it)
├── /core/                  	# Core framework and utility functions
│   ├── /fetch/
│	│   ├── /fetch.client.js	# got a customize whatwg-fetch module(not in use)
│   │   ├── /fetch.server.js	# handle the source requests to return different urls, and use fetch method from
│	│	│						node-fetch(for routes.js)
│   │   └── /package.json		# export the fetch.server as main, and fetch.client as browser
│	├── /db.js					# get the original db from pg and change it to async way with query and end method
│   ├── /DOMUtils.js			# eliminate the event handler difference between IE and DOM level 3.
│   ├── /Location.js			# create browser history or memory history
│   └── /passport.js			# login with facebook passport
│
├── /data/                  	# GraphQL server schema
│   ├── /types/
│	│   ├── /ContentType.js		# handle request and translate corresponding file to yaml string then to object
│   │   └── /UserType.js		# handle request with user info(not in use)
│   ├── /queries/
│	│   ├── /content.js			# graphQL type about file content
│   │   └── /me.js				# graphQL type about user info(noy in use)
│   └── /schema.js				# graphQL schema integrate the types above(for server.js)
│
├── /public/                	# Static files which are copied into the /build/public folder
├── /views/                 	# Express.js views for index and error pages
├── /client.js              	# Client-side startup script(not in use)
├── /config.js              	# Global application settings
├── /routes.js              	# Universal (isomorphic) application routes
└── /server.js              	# Server-side startup script


```
