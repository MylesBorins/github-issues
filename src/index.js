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
  getInitialState: function () {
    return {data: []}
  },
  componentDidMount: function () {
    github.issues(this.props.repo, function (err, issues) {
      if (err) {
        return console.log(new Error(err));
      }
      console.log(issues);
      this.setState({data: issues});
    }.bind(this));
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
