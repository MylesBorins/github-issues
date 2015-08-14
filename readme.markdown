#Github Issues
###Made with React and <3

##Dev

```bash
$ npm run dev
ecstatic serving dist/ at http://0.0.0.0:8000
```

* Start Watchify (browserify on changes to js)
* Start Uatu (copy assets from public to dist on change)
* Start Ecstatic (static file server)
  * Server is running on port 8000

##Prod

```
$ npm start
ecstatic serving dist/ at http://0.0.0.0:8000

```

* build project
* uglify and gzip js
* start Ecstatic (with gzip support enabled)
  * Server is running on port 8000


##Testing

```
$ npm test
OMG TESTS PASS # not actual message
```

This project has a series of unit(ish) tests. Currently API calls are not stubbed out, which could be done with sinon + rewire. The stack uses a module called [smokestack][smokestack], which will execute any code piped to it and pipe the output to STDOUT.

The tests are all written in tape. The blog post [Testing JavaScript Modules with Tape][use-tape] does a great job of explaining why tape is awesome!

There currently no tests written for the React components. I am quite sure this would be reasonably simple to test, render a react component with certain props and verify the output. If I have extra time I will revisit

##Git Hooks

This project uses the node module husky to wire some git hooks with npm scripts. In order to commit the code must lint, in order to push the code must pass the entire test suite.

####Notes 
* The seed of this project was heavily inspired by https://github.com/substack/react-starter

* It is worth noting I have never written React Before...

* I started with a bunch of code from --> https://facebook.github.io/react/docs/tutorial.html

  * changed "comment" to "issue" and quite a bit of work was done

* I wrote a small wrapper around the [xhr][xhr] module to do the restful call to the github api

* There is a delay while we wait for the latest api data from google. It could be really nice if we could animate in the issues after a load time... or have some static assets already there

* I currently have hard coded github secrets for an app I created... this is to simplify stuff so i can move forward. to be refactored time permitting

* The github module should cache results for at least a couple minutes (perhaps even poll)

* Flash at begining... yuk

[xhr]: https://www.npmjs.com/package/xhr "xhr on npmjs.com"
[smokestack]: https://www.npmjs.com/package/smokestack "smokestack on npmjs.com"
[use-tape]: http://ponyfoo.com/articles/testing-javascript-modules-with-tape "Testing JavaScript Modules with Tape"