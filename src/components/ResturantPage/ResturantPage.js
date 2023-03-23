import React, { useState } from 'react';
import panda_food from '../DesignA/Images/panda.jpg';

const ResturantPage = (props) => {

	// Here is the HTML/TailwindCSS that controls how the resturant page looks,
	// given a map dot or list element gets selected. Don't worry yet about the logic
	// for specific resturants, I can handle that (unless you wanna give it a shot).

	return(
		<div class="restaurant">
			<h1>Panda Express</h1>
			<img src={panda_food} alt="Panda Express" />
			<p>Wait Time: 15 min</p>
			<p>Average Price: $10</p>
			<p>Menu: link </p>
		</div>
		)
}

export default ResturantPage;