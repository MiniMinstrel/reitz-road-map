import React, { useState } from 'react';
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
			<div className ="panda">
				<div onClick={props.restaurantTrigger}>
					<img src={panda} alt="Panda Express" />
				</div>
			</div>
			<div className ="starbucks">
				<div onClick={props.restaurantTrigger}>
					<img src={starbucks} alt="Starbucks" />
				</div>
			</div>
			<div className ="pollo">
				<div onClick={props.restaurantTrigger}>
					<img src={pollo} alt="Pollo Tropical" />
				</div>
			</div>
			<div className ="mi-apa">
				<div onClick={props.restaurantTrigger}>
					<img src={mi_apa} alt="Mi Apa" />
				</div>
			</div>
		</div>
		)
}

export default ResturantDots;