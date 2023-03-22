import React, { useState } from 'react';

import ResturantDots from './ResturantDots';

const Map = ({ resturantTrigger }) => {

	// Reintepretation of resturantTrigger from Content.js, so
	// that it can get properly passed down to ResturantDots.

	const trigger2 = () => {
		resturantTrigger();
	}

	// This should render out an img of a mocked-up map of the Reitz Union,
	// and the dots are placed across the icon. The map should be able to be dragged,
	// but I'll take a look at the react-draggable package to see if that can be
	// added.

	return(
		<div>
			<p>Map!</p>
			<ResturantDots trigger2={trigger2} />
		</div>
		)
}

export default Map;