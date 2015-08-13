var React = require('react');

var Issues = require('./Issues');

var Root = React.createClass({
  render: function () {
    return (
      <Issues repo='npm/npm'/>
    );
  }
});

module.exports = Root;