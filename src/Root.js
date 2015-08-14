var React = require('react');

var Title = require('./Title');
var Issues = require('./Issues');

var Root = React.createClass({
  render: function () {
    return (
      <div id='root'>
        <Title org='npm' repo='npm'></Title>
        <Issues repo='npm/npm'></Issues>
      </div>
    );
  }
});

module.exports = Root;