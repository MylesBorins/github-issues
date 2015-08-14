var React = require('react');

var TopBar = React.createClass({
  render: function () {
    return (
      <div className='topbar'>
        <a onClick={this.props.onClickEvent} href={this.props.abridged ? null : this.props.issueURL}># {this.props.issueNumber}</a>
      </div>
    );
  }
});

module.exports = TopBar;