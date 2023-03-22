import React, { useState } from 'react';

import Map from '../DesignA/Map/Map';
import ListElement from '../DesignB/List/ListElement';
import ResturantPage from '../ResturantPage/ResturantPage';
import Search from '../Search/Search';
import Settings from '../Settings/Settings';


const Content = (props) => {

	let page;
	let display = props.currentDisplay;
	let key = props.entryKey;

	const resturantTrigger = (event) => {
		props.changeKey(3);
	}

	const contentHandler = () => {
		if (display == 0 && key == 1) {

			//...I'll clean this up in the morning. 

			page = <div>
				<Map resturantTrigger={resturantTrigger}/>
			</div>
		} else if (display == 0 && key == 2) {
			page = <div>
				{/* Repeat Element for as many resturants needed. */}
				<p>This is the list!</p>
				<ListElement resturantTrigger={resturantTrigger} name="" waitTime="" avgPrice="" menu="" />
				<ListElement resturantTrigger={resturantTrigger} name="" waitTime="" avgPrice="" menu="" />
				<ListElement resturantTrigger={resturantTrigger} name="" waitTime="" avgPrice="" menu="" />
			</div>
		} else if (display == 1) {
			page = <div>
				<Search />
				<ListElement resturantTrigger={resturantTrigger} name="" waitTime="" avgPrice="" menu="" />
				<ListElement resturantTrigger={resturantTrigger} name="" waitTime="" avgPrice="" menu="" />
			</div>
		} else if (display == 2) {
			page = <div>
				<Settings />
			</div>
		} else if (display == 3) {
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