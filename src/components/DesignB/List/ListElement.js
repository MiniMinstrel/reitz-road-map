import React, { useState } from 'react';

const ListElement = (props) => {

	return(
		<div onClick={() => {props.restaurantTrigger(props.name)}} className = "list">
			<div className = "icon-image">
				<div>
					{props.icon}
				</div>
			</div>
			<p> {props.name} {props.waitTime} {props.avgPrice} </p>
		</div>
		)
}

export default ListElement;