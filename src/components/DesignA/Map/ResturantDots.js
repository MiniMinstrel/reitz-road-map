import React, { useState } from 'react';
import Draggable from 'react-draggable';



const ResturantDots = (props) => {

	// This is the basic HTML/TailwindCSS that goes into each
	// pin of Design A. The onClick={trigger2} property will
	// change the display to the resturant page on click, whatever's
	// within the div will react to a click. 

	// You can use dummy icons/resturant names, I can implement
	// the logic per resturant.  

	return(
		<Draggable onStart={props.resturantTrigger}>
			<div className={`class ${props.givenClass}`}>
				<img src={props.name} alt="Panda Express" />
			</div>
		</Draggable>
		)
}

export default ResturantDots;