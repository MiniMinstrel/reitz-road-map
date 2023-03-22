import React, { useState } from 'react';

const ListElement = (props) => {

	// This returns each individual element in Design B's list.
	// To access the values you passed down previously, use props.(attribute),
	// as seen in props.resturantTrigger. 

	return(
		<div onClick={props.resturantTrigger}>
			<p>I'm one of the many resturants you can pick!</p>
		</div>
		)
}

export default ListElement;