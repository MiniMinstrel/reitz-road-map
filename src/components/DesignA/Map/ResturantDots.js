import React, { useState } from 'react';

const ResturantDots = (props) => {

	// This is the basic HTML/TailwindCSS that goes into each
	// pin of Design A. The onClick={trigger2} property will
	// change the display to the resturant page on click, whatever's
	// within the div will react to a click. 

	// You can use dummy icons/resturant names, I can implement
	// the logic per resturant.  

	return(
		<div onClick={props.resturantTrigger}>
			<p >I'm a dot on said map!</p>
		</div>
		)
}

export default ResturantDots;