import React from 'react';
import ReactDOM from 'react-dom';
import UserComponent from 'components/users/user.react.js';
class UsersListComponent extends React.Component {

	render() {
		var obj = this.props.users;
		var rows = [];

		return (
			<div className="dropdown">
			        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			          Dropdown
			          <span className="caret" />
			        </button>
			        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
			          <li><a href="#">Action</a></li>
			          <li><a href="#">Another action</a></li>
			          <li><a href="#">Something else here</a></li>
			          <li role="separator" className="divider" />
			          <li><a href="#">Separated link</a></li>
			        </ul>
			      </div>
			// <ul>
			// {
			// 	obj.map(function(obj,key){
			// 		return <UserComponent key={key} user={obj}/>
			// 	})
			//
			// }
			// </ul>
		);
	}
};

export default UsersListComponent;
