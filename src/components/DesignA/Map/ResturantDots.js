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
		<div onStart={() => false} onClick={() => props.restaurantTrigger(props.altText)} onTouchEnd={() => props.restaurantTrigger(props.altText)} class="grid-cols-1">
			<Draggable defaultPosition={props.start} position={props.pos} allowAnyClick={true} >
				<div className={`class ${props.givenClass}`} >
					<img src={props.name} alt={props.altText} />
				</div>
			</Draggable>
			<Draggable alt={props.altText} onStart={() => false} defaultPosition={props.start} position={modified} allowAnyClick={true} >
				<div class="justify-center">
					<div class="flex justify-center items-center bg-gray-100 rounded-full h-8 w-32 px-2">
					  <div class="flex-1 items-center justify-center h-full border-r border-gray-300 ">
					  	{props.avgPrice}
					  </div>
					  <div class="w-2 h-full bg-gray-300"></div>
					  <div class="flex-1 h-full border-l border-gray-300">
					  	<p>{props.waitTime}</p>
					  </div>
					</div>
				</div>
			</Draggable>
			
		</div>
		)
}

export default ResturantDots;