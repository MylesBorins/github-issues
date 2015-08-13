// 'use strict';

var test = require('tape');

var github = require('../src/github');

test('github: issues', function (t) {
  t.plan(3);
  t.ok(github.issues, 'there should be a method .issues()');
  github.issues('npm/npm', function (err, issues) {
    t.error(err, 'there should be not error when fetching the data');
    t.equals(issues.length, 25, 'there should be 25 issues returned');
  });
});
