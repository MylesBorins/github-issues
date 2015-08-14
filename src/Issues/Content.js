var React = require('react');

var Title = React.createClass({
  render: function () {
    return (
      <h2 className='title'>
        <a onClick={this.props.onClickEvent} href={this.props.url}>{this.props.title}</a>
      </h2>
    );
  }
});

var Content = React.createClass({
  prepareContent: function (content) {
    // TODO 
    //  turn @username into link
    if (this.props.abridged) {
      var sliceTo = content.indexOf(' ', 140);
      if (sliceTo !== -1) {
        content = content.slice(0, sliceTo);
      }
      content = <a onClick={this.props.onClickEvent} href={this.props.url}>{content}</a>;
    }

    return content;
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
        <Title onClickEvent={this.props.onClickEvent} url={this.props.url} title={this.props.title}/>
        {this.prepareContent(this.props.children)}
        <div className='labels'>
          {labelNodes}
        </div>
      </div>
    );
  }
});

module.exports = Content;