var React = require('react');

var IssueList = require('./IssueList');

var Issues = React.createClass({
  render: function() {
    return (
      <div className='issueBox'>
        <IssueList data={this.props.data} />
      </div>
    );
  }
});

module.exports = Issues;
