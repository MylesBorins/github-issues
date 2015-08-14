var React = require('react');

var Issue = React.createClass({
  prepareContent: function (content) {
    var sliced = content.slice(0, 139);
    if (content !== sliced) {
      sliced += '...';
    }
    return <a href={this.props.url}>{sliced}</a>;
  },
  render: function () {
    return (
      <div className='issue'>
        <div className='top'>
          <img className='avatar' src={this.props.user.avatar_url + '&s=100'} alt={'avatar of ' + this.props.user.login} ></img>
          <h4 className='username'>
            <a href={this.props.user.html_url} >{'@' + this.props.user.login}</a>
          </h4>
          <h2 className='title'>
            <a href={this.props.url}># {this.props.issueNumber} {this.props.title}</a>
          </h2>
          
        </div>
        <div className='content'>
          {this.prepareContent(this.props.children)}
        </div>
      </div>
    );
  }
});

//          <h2 className='issueNumber'>
//            <a href={this.props.issueURL}># {this.props.issueNumber}</a>
//          </h2>

module.exports = Issue;
