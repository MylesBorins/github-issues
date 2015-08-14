var path = require('path');
var xhr = require('xhr');

var base = 'https://api.github.com/';

function issues(project, page, cb) {
  if (typeof page === 'function') {
    cb = page;
    page = 1;
  }

  xhr({
    url: path.join(base, 'repos', project, 'issues?client_id=1a445357674dfc8794ea&client_secret=38271a3721193772948f670549c6e91e327ac353&state=open&per_page=25&page=' + page),
    json: true
  }, function (err, res) {
    if (err) {
      return cb(err);
    }
    return cb(null, res.body);
  });
}

module.exports = {
  issues: issues
};
