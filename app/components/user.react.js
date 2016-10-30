import React from 'react';

var UserComponent = React.createClass({
	render:function(){
		return (
			<li>
        <span>{this.props.user.name}</span>
        <span>{this.props.user.surname}</span>
			</li>
		)
	}
})


export default UserComponent;
