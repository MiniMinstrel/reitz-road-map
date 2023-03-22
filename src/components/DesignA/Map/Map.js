import React, { useState } from 'react';

import ResturantDots from './ResturantDots';

const Map = ({ resturantTrigger }) => {

	const trigger2 = () => {
		resturantTrigger();
	}

	return(
		<div>
			<p>Map!</p>
			<ResturantDots trigger2={trigger2} />
		</div>
		)
}

export default Map;