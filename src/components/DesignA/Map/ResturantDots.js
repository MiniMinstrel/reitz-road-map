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

	return(
		<div onClick={props.restaurantTrigger} onTouchEnd={props.restaurantTrigger}>
			<Draggable defaultPosition={props.start} position={props.pos} allowAnyClick={true} >
				<div className={`class ${props.givenClass}`} >
					<img src={props.name} alt={props.altText} />
				</div>
			</Draggable>
		</div>
		)
}

export default ResturantDots;