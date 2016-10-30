import React from 'react';

class UserComponent extends React.Component {
	render(){
		return (
			<li>
				<a href={`users/${this.props.user.id}`}>
					<span>{this.props.user.name}</span>
					<span>{this.props.user.surname}</span>
				</a>
			</li>
		)
	}
}


export default UserComponent;
