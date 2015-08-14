var path = require('path');
var url = require('url');
var querystring = require('querystring');

var xhr = require('xhr');

var base = 'https://api.github.com/';
var secret = 'client_id=1a445357674dfc8794ea&client_secret=38271a3721193772948f670549c6e91e327ac353';
var paginationProps = '&state=open&per_page=25&page=';

function issues(project, page, cb) {
  if (typeof page === 'function') {
    cb = page;
    page = 1;
  }

  xhr({
    url: path.join(base, 'repos', project, 'issues?' + secret + paginationProps + page),
    json: true
  }, function (err, res) {
    if (err) {
      return cb(err);
    }
    return cb(null, res.body);
  });
}

function issuePages(project, cb) {
  xhr({
    url: path.join(base, 'repos', project, 'issues?' + secret + paginationProps),
    json: true
  }, function (err, res) {
    if (err) {
      return cb(err);
    }
    var link = res.headers.link;
    // here's the magic
    var lastLink = link.split(',')[1].split(';')[0].slice(2, -1);
    var query = url.parse(lastLink).query;
    var count = querystring.parse(query).page;
    return cb(null, count);
  });
}

module.exports = {
  issues: issues,
  issuePages: issuePages
};
