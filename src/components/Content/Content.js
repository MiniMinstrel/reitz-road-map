import React, { useState } from 'react';


const Content = (props) => {

	let page;
	let display = props.currentDisplay;
	let key = props.entryKey;

	const resturantTrigger = (event) => {
		props.changeKey(3);
	}

	const contentHandler = () => {
		if (display == 0 && key == 1) {
			page = <div>
				<p>Here, we would put the map!</p>
				<p onClick={resturantTrigger}>I'm an element in the map!</p>
			</div>
		} else if (display == 0 && key == 2) {
			page = <div>
				<p onClick={resturantTrigger} >Here, we would put the list!</p>
			</div>
		} else if (display == 1) {
			page = <div>
				<p>Here, we would pull up the search menu!</p>
			</div>
		} else if (display == 2) {
			page = <div>
				<p>Here, we would pull up the settings!</p>
			</div>
		} else if (display == 3) {
			page = <div>
				<p>Here, we would pull up the resturant!</p>
			</div>
		}
	}

	contentHandler()

	return (
		<div>
			{page}
		</div>
	)
}

export default Content;