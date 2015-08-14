var React = require('react');

var Issue = React.createClass({
  render: function () {
    return (
      <div className='issue'>
        <img src={this.props.user.avatar_url + '&s=100'} alt={'avatar of ' + this.props.user.login} className='avatar'></img>
        
        <a href={this.props.user.html_url} className='issueAuthor'>
          <h4>{'@' + this.props.user.login}</h4>
        </a>
        
        <a href={this.props.url} className='title'>
          <h2>{this.props.title}</h2>
        </a>
        {/* this.props.children */}
        
      </div>
    );
  }
});

module.exports = Issue;
