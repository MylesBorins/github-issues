var React = require('react');

var Title = React.createClass({
  render: function () {
    var arrow = this.props.abridged ? null : <div onClick={this.props.onClickEvent} className='back-button'><h1><a href='#'>←</a></h1></div>;
    return (
      <div className='page-title'>
        {arrow}
        <h1>
          <a href={'https://github.com/' + this.props.org}>{this.props.org}</a>/
          <a href={'https://github.com/' + this.props.org + '/' + this.props.repo}>{this.props.repo}</a>
        </h1>
      </div>
    );
  }
});

module.exports = Title;
