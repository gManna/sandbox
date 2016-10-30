import React from 'react';
import ReactDOM from 'react-dom';

var UsersListComponent = React.createClass({
	getInitialState: function() {
	return {data: this.props.users};
	},
	render: function() {
		var obj = this.state.data;
		var rows = [];

		return (
			<ul>
			{
				obj.map(function(obj,key){
					return <li key={key}>{obj.name}</li>;
				})

			}
			</ul>
		);
	}
});

export default UsersListComponent;
