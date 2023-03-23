import React, { useState } from 'react';

import ResturantDots from './ResturantDots';

const Map = (props) => {

	// This should render out an img of a mocked-up map of the Reitz Union,
	// and the dots are placed across the icon. The map should be able to be dragged,
	// but I'll take a look at the react-draggable package to see if that can be
	// added.

	return(
		<div>
			<p>Map!</p>
			<ResturantDots resturantTrigger={props.resturantTrigger} />
		</div>
		)
}

export default Map;