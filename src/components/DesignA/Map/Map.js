import React, { useState } from 'react';
import Draggable from 'react-draggable';

import ResturantDots from './ResturantDots';

const Map = (props) => {

	// This should render out an img of a mocked-up map of the Reitz Union,
	// and the dots are placed across the icon. The map should be able to be dragged,
	// but I'll take a look at the react-draggable package to see if that can be
	// added.

	return(
		<div class="w-full h-full relative">
      		<div class="absolute inset-0 overflow-x-hidden" style={{ width: "250vw", height: "250vh" }}>
        		<Draggable defaultPosition={{x: -250, y: -150}}>
          			<img class="object-none h-full w-full" src="https://i.imgur.com/4DzPmDM.png" alt="" />
        		</Draggable>
      		</div>
        		<ResturantDots resturantTrigger={props.resturantTrigger} />
    	</div>
		)
}

export default Map;