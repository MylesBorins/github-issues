var React = require('react');

var Issue = require('./Issue');

// tutorial2.js
var IssueList = React.createClass({
  render: function () {
    var issueNodes = this.props.data.map(function (issue) {
      return (
        <Issue key={issue.id} user={issue.user} title={issue.title}>
          {issue.body}
        </Issue>
      );
    });
    return (
      <div className='issueList'>
        {issueNodes}
      </div>
    );
  }
});

module.exports = IssueList;