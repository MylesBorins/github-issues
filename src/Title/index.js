var React = require('react');

var Title = React.createClass({
  render: function () {
    return (
      <div className='page-title'>
        <h1>
          <a href={'https://github.com/' + this.props.org}>{this.props.org}</a>/
          <a href={'https://github.com/' + this.props.org + '/' + this.props.repo}>{this.props.repo}</a>
        </h1>
      </div>
    );
  }
});

module.exports = Title;
