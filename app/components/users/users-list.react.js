import React from 'react';
import ReactDOM from 'react-dom';
import UserComponent from 'components/users/user.react.js';
if (process.env.BROWSER) {
  require("components/users/usersList.scss");
}


class UsersListComponent extends React.Component {

	render() {
		var obj = this.props.users;
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
};

export default UsersListComponent;
