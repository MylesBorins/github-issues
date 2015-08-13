var React = require('react');

var Issue = React.createClass({
  render: function () {
    return (
      <div className='issue'>
        <h2 className='issueAuthor'>
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

// tutorial2.js
var IssueList = React.createClass({
  render: function () {
    var issueNodes = this.props.data.map(function (issue) {
      return (
        <Issue author={issue.user.login}>
          {issue.title}
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