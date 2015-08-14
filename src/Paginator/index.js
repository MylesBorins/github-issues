var React = require('react');

var github = require('../github');

var Arrow = React.createClass({
  handleClick: function () {
    var pageCount;
    if (this.props.action === 'next') {
      pageCount = this.props.currentPage + 1;
    }
    else if (this.props.action === 'prev') {
      pageCount = this.props.currentPage - 1;
    }
    this.props.onClickEvent(pageCount);
  },
  render: function () {
    var arrow;
    var show;
    if (this.props.direction === 'left') {
      arrow = '← ';
      show = this.props.currentPage !== 1;
    }
    else if (this.props.direction === 'right') {
      arrow = ' →';
      show = this.props.currentPage !== this.props.totalPages;
    }
    return show ? <a href='#' id={this.props.direction + '-arrow'} onClick={this.handleClick}>{arrow}</a> : null;
  }
});

var Paginator = React.createClass({
  loadIssuesFromServer: function (page) {
    github.issues(this.props.repo, page, function (err, issues) {
      if (err) {
        /*eslint-disable no-console */
        return console.log(new Error(err));
        /*eslint-enable no-console */
      }
      this.setState({data: issues});
    }.bind(this));
  },
  getInitialState: function () {
    return {
      currentPage: 1,
      totalPages: 3
    };
  },
  // componentDidMount: function () {
  //
  // },
  handleArrowClick: function (page) {
    this.setState({
      currentPage: page
    });
    this.props.onClickEvent(page);
  },
  render: function() {
    return (
      <div className='paginator'>
        <Arrow onClickEvent={this.handleArrowClick} direction='left' currentPage={this.state.currentPage} totalPages={this.state.totalPages} action='prev'/>
        {this.state.currentPage} / {this.state.totalPages}
        <Arrow onClickEvent={this.handleArrowClick} direction='right' currentPage={this.state.currentPage} totalPages={this.state.totalPages} action='next'/>
      </div>
    );
  }
});

module.exports = Paginator;
