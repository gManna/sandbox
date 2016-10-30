import React from 'react';
import ReactDOM from 'react-dom';
import UserComponent from '../user.react.js';

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
					return <UserComponent key={key} user={obj}/>
				})

			}
			</ul>
		);
	}
});

export default UsersListComponent;
