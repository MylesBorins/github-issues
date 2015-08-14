var React = require('react');

var Title = require('./Title');
var Issues = require('./Issues');
var Paginator = require('./Paginator');
var github = require('./github');

var Root = React.createClass({
  handleClickEvent: function (page) {
    this.setState({
      currentPage: page
    }, this.loadIssuesFromServer);
  },
  loadIssuesFromServer: function () {
    // This data should be cached... it should happen in the github module
    github.issues(this.props.org + '/' + this.props.repo, this.state.currentPage, function (err, issues) {
      if (err) {
        /*eslint-disable no-console */
        return console.log(new Error(err));
        /*eslint-enable no-console */
      }
      this.setState({data: issues});
    }.bind(this));
  },
  getCountOfIssues: function () {
    github.issuePages(this.props.org + '/' + this.props.repo, function (err, count) {
      this.setState({
        lastPage: count
      });
    }.bind(this));
  },
  getInitialState: function () {
    return {
      data: [],
      currentPage: 1,
      lastPage: 1
    };
  },
  componentDidMount: function () {
    this.loadIssuesFromServer();
    this.getCountOfIssues();
  },
  render: function () {
    var basePath = this.props.org + '/' + this.props.repo;
    return (
      <div id='root'>
        <Title org={this.props.org} repo={this.props.repo} />
        <Issues repo={basePath} data={this.state.data}/>
        <Paginator onClickEvent={this.handleClickEvent} repo={basePath} currentPage={this.state.currentPage} lastPage={this.state.lastPage}/>
      </div>
    );
  }
});

module.exports = Root;