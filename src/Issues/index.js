var React = require('react');

var Issue = require('./Issue');
var Paginator = require('../Paginator');

var Issues = React.createClass({
  render: function () {
    var issueNodes = this.props.data.map(function (issue) {
      return (
        <Issue key={issue.id} issue={issue} abridged={true} />
      );
    });
    return (
      <div className='main-view'>
        <div className='issueList'>
          {issueNodes}
        </div>
        <Paginator onClickEvent={this.props.onClickEvent} repo={this.props.basePath} currentPage={this.props.currentPage} lastPage={this.props.lastPage}/>
      </div>
    );
  }
});

module.exports = Issues;