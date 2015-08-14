var React = require('react');

var Issue = require('./Issue');

var Issues = React.createClass({
  render: function () {
    var issueNodes = this.props.data.map(function (issue) {
      return (
        <Issue key={issue.id} issueNumber={issue.number} issueURL={issue.url} user={issue.user} title={issue.title} url={issue.html_url} labels={issue.labels}>
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

module.exports = Issues;