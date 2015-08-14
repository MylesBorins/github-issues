var React = require('react');

var Issue = require('./Issue');

// tutorial2.js
var IssueList = React.createClass({
  render: function () {
    var issueNodes = this.props.data.map(function (issue) {
      return (
        <div key={issue.id}>
          <Issue issueNumber={issue.number} issueURL={issue.url} user={issue.user} title={issue.title} url={issue.html_url} labels={issue.labels}>
            {issue.body}
          </Issue>
          <hr />
        </div>
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