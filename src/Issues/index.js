var React = require('react');

var IssueList = require('./IssueList');
var github = require('../github');

var Issues = React.createClass({
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
        <IssueList data={this.state.data} />
      </div>
    );
  }
});

module.exports = Issues;
