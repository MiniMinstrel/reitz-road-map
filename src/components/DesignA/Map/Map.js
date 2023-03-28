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
	const [starPos, setstarPos] = useState({ x: 0, y: 0 });
	const [miPos, setMiPos] = useState({ x: 0, y: 0 });
	const [polloPos, setPolloPos] = useState({ x: 0, y: 0 });

  	const handleDrag = (e, ui) => {
    	setPandaPos({ x: ui.x + 230, y: ui.y + 450});
  	};

	return(
		<div class="w-full h-full relative">
      		<div class="absolute inset-0 overflow-x-hidden" style={{ width: "400vw", height: "400vh" }}>
        		<Draggable defaultPosition={{x: -400, y: -350}} onDrag={handleDrag}>
          			<img class="object-none h-full w-full" src="https://i.imgur.com/4DzPmDM.png" alt="" />
        		</Draggable>
      		</div>
        		<ResturantDots pos={pandaPos} name={panda} givenClass={"panda"} resturantTrigger={props.resturantTrigger}/>
        		<ResturantDots pos={starPos} name={starbucks} givenClass={"starbucks"} resturantTrigger={props.resturantTrigger}/>
        		<ResturantDots pos={miPos} name={mi_apa} givenClass={"mi-apa"} resturantTrigger={props.resturantTrigger}/>
        		<ResturantDots pos={polloPos} name={pollo} givenClass={"pollo"} resturantTrigger={props.resturantTrigger}/>
    	</div>
		)
}

export default Map;