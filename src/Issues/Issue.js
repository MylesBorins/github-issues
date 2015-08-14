// npm modules
var React = require('react');

var TopBar = require('./TopBar');
var UserData = require('./UserData');
var Content = require('./Content');

var Comment = React.createClass({
  render: function () {
    return (
      <div className='comment'>
        <TopBar onClickEvent={null} issueURL={null} issueNumber={this.props.number + 1} />
        <UserData avatarURL={this.props.comment.user.avatar_url} userURL={this.props.comment.user.html_url} username={this.props.comment.user.login} />
        <div className='content'>
          {this.props.comment.body}
        </div>
      </div>
    );
  }
});

var Issue = React.createClass({
  handleClick: function ()  {
    this.props.onClickEvent(this.props.issue.number);
  },
  render: function () {
    var comments;
    if (!this.props.abridged) {
      comments = this.props.comments.map(function (comment, i) {
        return (
          <Comment key={comment.id} comment={comment} number={i}/>
        );
      }.bind(this));
      comments = <div className='comments-list'>{comments}</div>;
    }
    return (
      <div className='issue'>
        <TopBar onClickEvent={this.handleClick} issueURL={this.props.issue.url} issueNumber={this.props.issue.number}/>
        <UserData avatarURL={this.props.issue.user.avatar_url} userURL={this.props.issue.user.html_url} username={this.props.issue.user.login} />
        <Content onClickEvent={this.handleClick} url={this.props.issue.url} title={this.props.issue.title} labels={this.props.issue.labels} abridged={this.props.abridged}>
          {this.props.issue.body}
        </Content>
        {comments}
      </div>
    );
  }
});

module.exports = Issue;
