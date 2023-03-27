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
		<div class="map">
			
				<div class="panda">
					<Draggable>
						<div onClick={props.resturantTrigger}>
							<img src={panda} alt="Panda Express" />
						</div>
					</Draggable>
				</div>
			<Draggable>
				<div class="starbucks">
					<img onClick={props.resturantTrigger} class="w-1/6 h-1/6" src={starbucks} alt="Starbucks" />
				</div>
			</Draggable>
			<Draggable>
				<div class="pollo">
					<img onClick={props.resturantTrigger} class="w-1/6 h-1/6" src={pollo} alt="Pollo Tropical" />
				</div>
			</Draggable>
			<Draggable>
				<div class="mi-apa">
					<img onClick={props.resturantTrigger} class="w-1/6 h-1/6" src={mi_apa} alt="Mi Apa" />
				</div>
			</Draggable>
		</div>
		)
}

export default ResturantDots;