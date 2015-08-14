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

var UserData = React.createClass({
  render: function () {
    return (
      <div className='user-data'>
        <h4 className='username'>
          <a href={this.props.userURL} >{'@' + this.props.username}</a>
        </h4>
        <img className='avatar' src={this.props.avatarURL + '&s=75'} alt={'avatar of ' + this.props.username} ></img>
      </div>
    );
  }
});

var Title = React.createClass({
  render: function () {
    return (
      <h2 className='title'>
        <a href={this.props.url}>{this.props.title}</a>
      </h2>
    );
  }
});

var Content = React.createClass({
  prepareContent: function (content) {
    // freaking NAIVE
    var sliced = content.slice(0, 139);
    if (content !== sliced) {
      sliced += '...';
    }
    // TODO 
    //  finish word gracefully
    //  turn @username into link
    return <a href={this.props.url}>{sliced}</a>;
  },
  render: function () {
    return (
      <div className='content'>
        <Title url={this.props.url} title={this.props.title}/>
        {this.prepareContent(this.props.children)}
      </div>
    );
  }
});

var Issue = React.createClass({
  render: function () {
    return (
      <div className='issue'>
        <TopBar issueURL={this.props.issueURL} issueNumber={this.props.issueNumber}/>
        <UserData avatarURL={this.props.user.avatar_url} userURL={this.props.user.html_url} username={this.props.user.login} />
        <Content url={this.props.url} title={this.props.title}>
          {this.props.children}
        </Content>
      </div>
    );
  }
});

module.exports = Issue;
