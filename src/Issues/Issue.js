// npm modules
var React = require('react');

var TopBar = require('./TopBar');
var UserData = require('./UserData');
var Content = require('./Content');

var Issue = React.createClass({
  render: function () {
    return (
      <div className='issue'>
        <TopBar issueURL={this.props.url} issueNumber={this.props.issueNumber}/>
        <UserData avatarURL={this.props.user.avatar_url} userURL={this.props.user.html_url} username={this.props.user.login} />
        <Content url={this.props.url} title={this.props.title} labels={this.props.labels}>
          {this.props.children}
        </Content>
      </div>
    );
  }
});

module.exports = Issue;
