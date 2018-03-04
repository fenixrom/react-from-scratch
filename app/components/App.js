var React = require('react');
var ReactDom = require('react-dom');
var PropTypes = require('prop-types');
var Popular = require('./Popular');

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Popular />
			</div>
		)
	} 
}

module.exports = App;