import React, { useState } from 'react';
import Draggable from 'react-draggable';
import panda from '../Images/panda.png';
import starbucks from '../Images/starbucks.png'; 
import mi_apa from '../Images/mi_apa.png'; 
import pollo from '../Images/pollo.png'; 

import ResturantDots from './ResturantDots';

const Map = (props) => {

	// This should render out an img of a mocked-up map of the Reitz Union,
	// and the dots are placed across the icon.

	// Set default offsets here!

	const [pandaPos, setPandaPos] = useState({ x: -170, y: 100 });
	const [starPos, setStarPos] = useState({ x: -300, y: 90 });
	const [miPos, setMiPos] = useState({ x: -160, y: 20 });
	const [polloPos, setPolloPos] = useState({ x: -300, y: 200 });

  	const handleDrag = (e, ui) => {
    	setPandaPos({ x: ui.x + 230, y: ui.y + 450});
		setStarPos({x: ui.x + 80, y: ui.y + 380});
		setMiPos({x: ui.x + 240, y: ui.y + 370});
		setPolloPos({x: ui.x , y: ui.y + 170});
  	};

	return(
		<div class="w-full h-full relative">
      		<div class="absolute inset-0 overflow-x-hidden" style={{ width: "400vw", height: "400vh" }}>
        		<Draggable defaultPosition={{x: -400, y: -350}} onDrag={handleDrag}>
          			<img class="object-none h-full w-full" src="https://i.imgur.com/4DzPmDM.png" alt="" />
        		</Draggable>
      		</div>
        		<ResturantDots pos={pandaPos} name={panda} givenClass={"panda"} bubble = "15|$10" restaurantTrigger={props.restaurantTrigger} altText={"Panda Express"} />
        		<ResturantDots pos={starPos} name={starbucks} givenClass={"starbucks"} bubble = "5|$5" restaurantTrigger={props.restaurantTrigger} altText={"Starbucks"}/>
        		<ResturantDots pos={miPos} name={mi_apa} givenClass={"mi-apa"} bubble = "10|$7" restaurantTrigger={props.restaurantTrigger} altText={"Mi Apa"}/>
        		<ResturantDots pos={polloPos} name={pollo} givenClass={"pollo"} bubble = "15|$10" restaurantTrigger={props.restaurantTrigger} altText={"Pollo Tropical"}/>
    	</div>
		)
}

export default Map;