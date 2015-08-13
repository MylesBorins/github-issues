var React = require('react');

var github = require('./github');

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

var IssueView = React.createClass({
  loadIssuesFromServer: function (page) {
    github.issues(this.props.repo, page, function (err, issues) {
      if (err) {
        /*eslint-disable no-console */
        return console.log(new Error(err));
        /*eslint-enable no-console */
      }
      this.setState({data: issues});
    }.bind(this));
  },
  getInitialState: function () {
    return {
      data: []
    };
  },
  componentDidMount: function () {
    this.loadIssuesFromServer(1);
  },
  render: function() {
    return (
      <div className='issueBox'>
        <h1>Issues</h1>
        <IssueList data={this.state.data} />
      </div>
    );
  }
});

React.render(
  <IssueView repo='npm/npm'/>,
  document.getElementById('content')
);
