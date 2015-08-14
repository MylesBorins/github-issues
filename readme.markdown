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
  * only 58k!
* minified css
* starts Ecstatic (with gzip support enabled)
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

This project uses the node module husky to wire some git hooks with npm scripts. In order to commit the code must lint, in order to push the code must lint. This will catch all sorts of silly errors early :D.

####Notes 
* Is peeked at a seed project by Substack to get my bearings in the beginning https://github.com/substack/react-starter
  * the npm script stack of this project is quite different now.

* It is worth noting I have never written React Before...

* I started with a bunch of code from --> https://facebook.github.io/react/docs/tutorial.html

  * changed "comment" to "issue" and quite a bit of work was done

* I wrote a small wrapper around the [xhr][xhr] module to do the restful call to the github api
  * It has the same basic api layer as request, so this module could in theory work just as nicely on the server outside a react app.

* There is a delay while we wait for the latest api data from google. It could be really nice if we could animate in the issues after a load time... or have some static assets already there (loading screen)

* I currently have hard coded github secrets for an app I created... this is to simplify stuff so i can move forward. Please be respectful of the token being included. I want to make sure it just works for you with minimal setup

* The github module should cache results rather than hitting the api every time. Offline storage could be a good way to cache this as well, perhaps with some sort of polling model to invalidate the cache.

* I'm finding the way I'm handling event propagation to be really gross... THERE HAS TO BE A BETTER WAY. I would love to learn some patterns to make some of the things I've been doing less painful.

* I have gotten most of the requirements done from the PDF document. One glaring missing piece is that I did not implement that "@user" highlighting. NPM has so man y false positives right now using @ for scoped modules the entire thing overwhelmed me a bit to manage in this pass.

* I think I could work on the naming and separation of my components a bit

* I did not do any specific accessibility support on the site which would have been awesome had I a bit more time. It looks like there are some really good building blocks for keyboard based interaction in react.

[xhr]: https://www.npmjs.com/package/xhr "xhr on npmjs.com"
[smokestack]: https://www.npmjs.com/package/smokestack "smokestack on npmjs.com"
[use-tape]: http://ponyfoo.com/articles/testing-javascript-modules-with-tape "Testing JavaScript Modules with Tape"