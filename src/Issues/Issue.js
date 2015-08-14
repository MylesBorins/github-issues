// npm modules
var React = require('react');

var TopBar = require('./TopBar');
var UserData = require('./UserData');
var Content = require('./Content');

var Issue = React.createClass({
  handleClick: function ()  {
    this.props.onClickEvent(this.props.issue.number);
  },
  render: function () {
    return (
      <div className='issue'>
        <TopBar onClickEvent={this.handleClick} issueURL={this.props.issue.url} issueNumber={this.props.issue.number}/>
        <UserData avatarURL={this.props.issue.user.avatar_url} userURL={this.props.issue.user.html_url} username={this.props.issue.user.login} />
        <Content onClickEvent={this.handleClick} url={this.props.issue.url} title={this.props.issue.title} labels={this.props.issue.labels} abridged={this.props.abridged}>
          {this.props.issue.body}
        </Content>
      </div>
    );
  }
});

module.exports = Issue;
