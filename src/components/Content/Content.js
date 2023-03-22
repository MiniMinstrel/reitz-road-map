import React, { useState } from 'react';

import Map from '../DesignA/Map/Map';
import ListElement from '../DesignB/List/ListElement';
import ResturantPage from '../ResturantPage/ResturantPage';
import Search from '../Search/Search';
import Settings from '../Settings/Settings';


const Content = (props) => {

	// Initialize the page to be rendered, the current value to display, and the design key
	// from App.js.

	let page;
	let display = props.currentDisplay;
	let key = props.entryKey;

	// On click, this will automatically pull up the resturant display. Right now,
	// it won't pass information about what resturant based on the click, but I'll
	// change that.

	const resturantTrigger = (event) => {
		props.changeKey(3);
	}

	// This is ran once, and will decide what content is displayed to page. 

	const contentHandler = () => {
		if (display == 0 && key == 1) {

			//...I'll clean this up in the morning.
			// It is now morning. This renders the map, which
			// contains the mapdots as well. 

			page = <div>
				<Map resturantTrigger={resturantTrigger}/>
			</div>
		} else if (display == 0 && key == 2) {
			
			// This renders all of the list elements in Design B's
			// design. The attributes relate to the aspects of each
			// list. You can access them using props.(attribute) for ListElement.js.
			// For example, props.waitTime will pull whatever you put in the waitTime.

			page = <div>
				{/* Repeat Element for as many resturants needed. */}
				<p>This is the list!</p>
				<ListElement resturantTrigger={resturantTrigger} name="" waitTime="" avgPrice="" menu="" logo="" />
				<ListElement resturantTrigger={resturantTrigger} name="" waitTime="" avgPrice="" menu="" logo="" />
				<ListElement resturantTrigger={resturantTrigger} name="" waitTime="" avgPrice="" menu="" logo="" />
			</div>
		} else if (display == 1) {

			// This renders the search bar, and the results of the search bar.
			// It should be contained all within the Search component. I'll fix that.

			page = <div>
				<Search />
				<ListElement resturantTrigger={resturantTrigger} name="" waitTime="" avgPrice="" menu="" />
				<ListElement resturantTrigger={resturantTrigger} name="" waitTime="" avgPrice="" menu="" />
			</div>
		} else if (display == 2) {

			// This renders the Settings page. This is a good starting place,
			// if you're looking to work on something.

			page = <div>
				<Settings />
			</div>
		} else if (display == 3) {

			// This renders the Resturants page. This is a good starting place,
			// if you're looking to work on something. Don't worry about the logic
			// behind setting a specific resturant, I can handle that. Just the
			// basic HTML/TailwindCSS layout would be great.

			page = <div>
				<ResturantPage />
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