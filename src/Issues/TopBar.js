var React = require('react');

var TopBar = React.createClass({
  render: function () {
    return (
      <div className='topbar'>
        <a href={this.props.issueURL}># {this.props.issueNumber}</a>
      </div>
    );
  }
});

module.exports = TopBar;