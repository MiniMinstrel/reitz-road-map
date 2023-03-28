import React, { useState } from 'react';
import Draggable from 'react-draggable';
import panda from '../Images/panda.png';
import starbucks from '../Images/starbucks.png'; 
import mi_apa from '../Images/mi_apa.png'; 
import pollo from '../Images/pollo.png'; 

import ResturantDots from './ResturantDots';

const Map = (props) => {

	// This should render out an img of a mocked-up map of the Reitz Union,
	// and the dots are placed across the icon. The map should be able to be dragged,
	// but I'll take a look at the react-draggable package to see if that can be
	// added.

	return(
		<div class="w-full h-full relative">
      		<div class="absolute inset-0 overflow-x-hidden" style={{ width: "400vw", height: "400vh" }}>
        		<Draggable defaultPosition={{x: -400, y: -350}}>
          			<img class="object-none h-full w-full" src="https://i.imgur.com/4DzPmDM.png" alt="" />
        		</Draggable>
      		</div>
        		<ResturantDots name={panda} givenClass={"panda"} resturantTrigger={props.resturantTrigger}/>
        		<ResturantDots name={starbucks} givenClass={"panda"} resturantTrigger={props.resturantTrigger}/>
        		<ResturantDots name={mi_apa} givenClass={"panda"} resturantTrigger={props.resturantTrigger}/>
        		<ResturantDots name={pollo} givenClass={"panda"} resturantTrigger={props.resturantTrigger}/>
    	</div>
		)
}

export default Map;