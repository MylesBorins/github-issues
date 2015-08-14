var React = require('react');

var Issue = require('./Issue');

var Issues = React.createClass({
  render: function () {
    var issueNodes = this.props.data.map(function (issue) {
      return (
        <Issue key={issue.id} issue={issue} abridged={true} />
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