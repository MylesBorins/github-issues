var React = require('react');

var Issue = React.createClass({
  render: function () {
    return (
      <div className='issue'>
        <img src={this.props.user.avatar_url + '&s=100'} alt={'avatar of ' + this.props.user.login} className='avatar'></img>
        <h2 className='issueAuthor'>
          <a href={this.props.user.html_url}>{'@' + this.props.user.login}</a>
        </h2>
        {/* this.props.children */}
        
      </div>
    );
  }
});

module.exports = Issue;
