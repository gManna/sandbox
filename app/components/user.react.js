import React from 'react';
import ReactDOM from 'react-dom';

var UserComponent = React.createClass({
	render: function() {
		console.log(this.props);
		return (
			<div className="application">
				<h1>Users</h1>
					{this.props.map(function(name) {
					 return <li key={name}>{name}</li>;
				 })}
			</div>
		);
	}
});

export default UserComponent;
