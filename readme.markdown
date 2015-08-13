#Github Issues
###Made with React and <3

##Dev

```npm run dev```

* Start Watchify (browserify on changes to js)
* Start Uatu (copy assets from public to dist on change)
* Start Ecstatic (static file server)
  * Server is running on port 8000

##Prod

```npm start```

* build project
* uglify and gzip js
* start Ecstatic (with gzip support enabled)
  * Server is running on port 8000
  
  
##Git Hooks

This project uses the node module husky to wire some git hooks with npm scripts. In order to commit the code must lint, in order to push the code must pass the entire test suite.

####Notes
* The seed of this project was heavily inspired by https://github.com/substack/react-starter

* It is worth noting I have never written React Before...

* I started with a bunch of code from --> https://facebook.github.io/react/docs/tutorial.html

  * changed "comment" to "issue" and quite a bit of work was done

* I wrote a small wrapper around the [xhr][xhr] module to do the restful call to the github api

  * you can find a unit(ish) test written with tape
    * api calls could be stubbed out (sinon + rewire)
  * tests are browserified and piped into smokestack to execute in the browser.

[xhr]: https://www.npmjs.com/package/xhr "xhr on npmjs.com"

