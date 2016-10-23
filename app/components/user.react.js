import React from 'react';
import ReactDOM from 'react-dom';

var UserComponent = React.createClass({
	getInitialState: function() {
	return {data: [this.props.users]};
	},
	render: function() {
		return (
			<div className="application">
			<h1>Users</h1>
			{console.log(this.state["name"])}
			</div>
		);
	}
});

export default UserComponent;
