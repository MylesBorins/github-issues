var React = require('react');

var Issue = React.createClass({
  render: function () {
    return (
      <div className='issue'>
        <div className='top'>
          <img src={this.props.user.avatar_url + '&s=50'} alt={'avatar of ' + this.props.user.login} className='avatar'></img>

          <h4 className='issueAuthor'>
            <a href={this.props.user.html_url} >{'@' + this.props.user.login}</a>
          </h4>

          <h3 className='title'>
            <a href={this.props.url}>{this.props.title}</a>
          </h3>
        </div>
        <div className='content'>
          { this.props.children.slice(0,139) }
        </div>
      </div>
    );
  }
});

module.exports = Issue;
