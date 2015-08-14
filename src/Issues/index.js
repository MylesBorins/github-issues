var React = require('react');

var Issue = require('./Issue');
var Paginator = require('../Paginator');

var Issues = React.createClass({
  render: function () {
    var issueNodes = this.props.data.map(function (issue) {
      issue.url = '#';
      return (
        <Issue onClickEvent={this.props.issueOnClickEvent} key={issue.id} issue={issue} abridged={true} />
      );
    }.bind(this));
    return (
      <div className='main-view'>
        <div className='issueList'>
          {issueNodes}
        </div>
        <Paginator onClickEvent={this.props.paginatorOnClickEvent} repo={this.props.basePath} currentPage={this.props.currentPage} lastPage={this.props.lastPage}/>
      </div>
    );
  }
});

module.exports = Issues;