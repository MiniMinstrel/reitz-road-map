import React, { useState } from 'react';

const ResturantPage = (props) => {

	// Here is the HTML/TailwindCSS that controls how the resturant page looks,
	// given a map dot or list element gets selected. Don't worry yet about the logic
	// for specific resturants, I can handle that (unless you wanna give it a shot).

	return(
		<div className ="restaurant">
			<h1> {props.name} </h1>
			{props.food}
			<p> {props.wait} </p>
			<p> {props.price} </p>
			<p> {props.menu} </p>
		</div>
		)
}

export default ResturantPage;