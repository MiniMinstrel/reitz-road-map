import React, { useState } from 'react';

const ListElement = (props) => {

	return(
		<div className = "list">
			<div className = "icon-image">
				<div onClick={props.restaurantTrigger}>
					{props.icon}
				</div>
			</div>
			<p> {props.name} {props.waitTime} {props.avgPrice} </p>
		</div>
		)
}

export default ListElement;