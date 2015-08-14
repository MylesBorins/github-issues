var React = require('react');

var UserData = React.createClass({
  render: function () {
    return (
      <div className='user-data'>
        <h4 className='username'>
          <a href={this.props.userURL} >{'@' + this.props.username}</a>
        </h4>
        <a href={this.props.userURL}><img className='avatar' src={this.props.avatarURL + '&s=75'} alt={'avatar of ' + this.props.username} ></img></a>
      </div>
    );
  }
});

module.exports = UserData;