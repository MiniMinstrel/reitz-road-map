import React, { useState } from 'react';
import Draggable from 'react-draggable';

import panda from '../Images/panda.png';
import starbucks from '../Images/starbucks.png'; 
import mi_apa from '../Images/mi_apa.png'; 
import pollo from '../Images/pollo.png'; 


const ResturantDots = (props) => {

	// This is the basic HTML/TailwindCSS that goes into each
	// pin of Design A. The onClick={trigger2} property will
	// change the display to the resturant page on click, whatever's
	// within the div will react to a click. 

	// You can use dummy icons/resturant names, I can implement
	// the logic per resturant.

	const modified = {
		x: props.pos.x + 130,
		y: props.pos.y
	}  

	return(
		<div className ="pin">
			<div onClick={() => props.restaurantTrigger(props.altText)} onTouchEnd={() => props.restaurantTrigger(props.altText)}>
				<Draggable onStart={() => false} defaultPosition={props.start} position={props.pos} allowAnyClick={true} >
					<div className={`class ${props.givenClass}`} >
						<p> {props.bubble} </p> 
						<img src={props.name} alt={props.altText} />
					</div>
				</Draggable>
			</div>
		</div>
		)
}

export default ResturantDots;