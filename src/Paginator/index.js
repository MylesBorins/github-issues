// npm modules
var React = require('react');

var Arrow = React.createClass({
  render: function () {
    var arrow;
    var show;
    if (this.props.direction === 'left') {
      arrow = '← ';
      show = this.props.currentPage !== 1;
    }
    else if (this.props.direction === 'right') {
      arrow = ' →';
      show = this.props.currentPage !== this.props.lastPage;
    }
    return show ? <a href='#' id={this.props.direction + '-arrow'} onClick={this.handleClick}>{arrow}</a> : null;
  }
});

var Paginator = React.createClass({
  render: function() {
    return (
      <div className='paginator'>
        <Arrow onClickEvent={this.props.onClickEvent} direction='left' currentPage={this.props.currentPage} lastPage={this.props.lastPage} action='prev'/>
        {this.props.currentPage} / {this.props.lastPage}
        <Arrow onClickEvent={this.props.onClickEvent} direction='right' currentPage={this.props.currentPage} lastPage={this.props.lastPage} action='next'/>
      </div>
    );
  }
});

module.exports = Paginator;
