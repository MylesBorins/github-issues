var React = require('react');

var Title = require('./Title');
var Issues = require('./Issues');
var Paginator = require('./Paginator');
var github = require('./github');

var Root = React.createClass({
  handleClickEvent: function (page) {
    this.setState({
      page: page
    }, this.loadIssuesFromServer);
  },
  loadIssuesFromServer: function () {
    github.issues(this.props.org + '/' + this.props.repo, this.state.page, function (err, issues) {
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
      data: [],
      page: 1
    };
  },
  componentDidMount: function () {
    this.loadIssuesFromServer();
  },
  render: function () {
    var basePath = this.props.org + '/' + this.props.repo;
    return (
      <div id='root'>
        <Title org={this.props.org} repo={this.props.repo} />
        <Issues repo={basePath} data={this.state.data}/>
        <Paginator onClickEvent={this.handleClickEvent} repo={basePath} />
      </div>
    );
  }
});

module.exports = Root;