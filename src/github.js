var path = require('path');
var xhr = require('xhr');

var base = 'https://api.github.com/';

function issues(project, page, cb) {
  if (typeof page === 'function') {
    cb = page;
    page = 1;
  }

  xhr({
    url: path.join(base, 'repos', project, 'issues?state=open&per_page=25&page=' + page),
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
