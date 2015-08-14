var React = require('react');

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
    var labelNodes = this.props.labels.map(function (label, i) {
      label.url = label.url.replace('https://api.github.com/repos/', 'https://github.com/');
      return (
        <div key={10000 + i} className='label' style={{backgroundColor: '#' + label.color}}>
          <a href={label.url}>{label.name}</a>
        </div>
      );
    });
    return (
      <div className='content'>
        <Title url={this.props.url} title={this.props.title}/>
        {this.prepareContent(this.props.children)}
        <div className='labels'>
          {labelNodes}
        </div>
      </div>
    );
  }
});

module.exports = Content;