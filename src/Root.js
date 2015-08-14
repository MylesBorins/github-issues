// npm module
var React = require('react');

// local modules
var Title = require('./Title');
var Issues = require('./Issues');
var Issue = require('./Issues/Issue');

var github = require('./github');

var Root = React.createClass({
  getInitialState: function () {
    return {
      data: [],
      currentPage: 1,
      lastPage: 1,
      abridged: true,
      issueData: {}
    };
  },
  makeRepoName: function () {
    return this.props.org + '/' + this.props.repo;
  },
  loadIssuesFromServer: function () {
    // This data should be cached... it should happen in the github module
    github.issues(this.makeRepoName(), this.state.currentPage, function (err, issues) {
      if (err) {
        /*eslint-disable no-console */
        return console.log(new Error(err));
        /*eslint-enable no-console */
      }
      this.setState({data: issues});
    }.bind(this));
  },
  getCommentsFromServer: function () {
    github.comments(this.state.commentURL, function (err, comments) {
      this.setState({
        comments: comments,
        abridged: !this.state.abridged
      });
    }.bind(this));
  },
  getIssueFromServer: function () {
    github.issue('npm/npm', this.state.issueNumber.toString(), function (err, issue) {
      if (err) {
        /*eslint-disable no-console */
        return console.log(new Error(err));
        /*eslint-enable no-console */
      }
      issue.url = issue.url.replace('https://api.github.com/repos/', 'https://github.com/');
      this.setState({
        issueData: issue,
        commentURL: issue.comments_url
      }, this.getCommentsFromServer);
    }.bind(this));
  },
  getCountOfIssues: function () {
    github.issuePages(this.makeRepoName(), function (err, count) {
      this.setState({
        lastPage: count
      });
    }.bind(this));
  },
  componentDidMount: function () {
    this.loadIssuesFromServer();
    this.getCountOfIssues();
  },
  handlePaginatorClickEvent: function (page) {
    this.setState({
      currentPage: page
    }, this.loadIssuesFromServer);
  },
  handleIssueClickEvent: function (number) {
    if (this.state.abridged) {
      this.setState({
        issueNumber: number
      }, this.getIssueFromServer);
    }
  },
  handleArrowClickEvent: function () {
    this.setState({
      abridged: !this.state.abridged
    });
  },
  render: function () {
    var basePath = this.props.org + '/' + this.props.repo;
    var content;

    if (this.state.abridged) {
      content = <Issues repo={basePath} data={this.state.data} issueOnClickEvent={this.handleIssueClickEvent} paginatorOnClickEvent={this.handlePaginatorClickEvent} repo={basePath} currentPage={this.state.currentPage} lastPage={this.state.lastPage} />;
    }
    
    else {
      content = <Issue issue={this.state.issueData} comments={this.state.comments}/>;
    }

    return (
      <div id='root'>
        <Title onClickEvent={this.handleArrowClickEvent} org={this.props.org} repo={this.props.repo} abridged={this.state.abridged}/>
        {content}
      </div>
    );
  }
});

module.exports = Root;