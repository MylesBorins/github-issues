var React = require('react');

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

module.exports = Issue;
