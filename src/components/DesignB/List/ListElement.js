import React, { useState } from 'react';

const ListElement = (props) => {

	// This returns each individual element in Design B's list.
	// To access the values you passed down previously, use props.(attribute),
	// as seen in props.resturantTrigger. 

	//name="Panda Express" waitTime="15 min" avgPrice="$10" menu="menu" logo=""
	return(
		<div onClick={props.resturantTrigger}>
			<p>{props.name} {props.waitTime} {props.avgPrice} </p>
		</div>
		)
}

export default ListElement;