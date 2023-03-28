import React, { useState } from 'react';

import Map from '../DesignA/Map/Map';
import ListElement from '../DesignB/List/ListElement';
import ResturantPage from '../ResturantPage/ResturantPage';
import Search from '../Search/Search';
import Settings from '../Settings/Settings';

//logos
import panda from '../DesignA/Images/panda.png';
import starbucks from '../DesignA/Images/starbucks.png'; 
import mi_apa from '../DesignA/Images/mi_apa.png'; 
import pollo from '../DesignA/Images/pollo.png'; 

//restaurant page images
import panda_food from '../DesignA/Images/panda.jpg';
import pollo_food from '../DesignA/Images/pollo.jpeg';
import starbs_food from '../DesignA/Images/starbucks.jpeg';
import mi_apa_food from '../DesignA/Images/miapa.jpg';

const Content = (props) => {

	// Initialize the page to be rendered, the current value to display, and the design key
	// from App.js.

	let page;
	let display = props.currentDisplay;
	let key = props.entryKey;

	const [restaurantName, setRestaurantName] = useState("");

	const restaurantTrigger = (restaurant) => {
		setRestaurantName(restaurant);
		console.log(restaurant);
		props.changeKey(3);
	}

	const searchTrigger = (event) => {
		console.log(event)
		const query = event.toLowerCase();
		const restaurants = ['Mi Apa', 'Panda Express', 'Pollo Tropical', 'Starbucks'];
		restaurants.forEach((value) => {
			if (value.toLowerCase().includes(query)) {
				setRestaurantName(value);
			}
		});
		props.changeKey(3);
	}

	// This is ran once, and will decide what content is displayed to page. 

	const contentHandler = () => {
		if (display == 0 && key == 1) {

			page = <div>
				<Map restaurantTrigger={restaurantTrigger}/>
			</div>
		} 
		else if (display == 0 && key == 2) {
			
			// This renders all of the list elements in Design B's
			// design. The attributes relate to the aspects of each
			// list. You can access them using props.(attribute) for ListElement.js.
			// For example, props.waitTime will pull whatever you put in the waitTime.

			page = <div>
				{/* Repeat Element for as many resturants needed. */}
				<div class= "design-b-list">
					<p>This is the list!</p>
						<div class= "list-panda">
							<ListElement restaurantTrigger={restaurantTrigger} name="Panda Express"  icon = <img src={panda} alt="Panda Express" /> waitTime="15 min" avgPrice="$10" menu="https://www.tapingo.com/order/restaurant/panda-express-reitz-union-uf/" logo="" />
						</div>
						<div class= "list-starbucks">
							<ListElement restaurantTrigger={restaurantTrigger} name="Starbucks" icon = <img src={starbucks} alt="Starbucks"/> waitTime="5 min" avgPrice="$5" menu="https://www.tapingo.com/order/restaurant/reitz-union-starbucks-uf/" logo= "" />
						</div>
						<div class= "list-pollo">
							<ListElement restaurantTrigger={restaurantTrigger} name="Pollo Tropical" icon = <img src={pollo} alt="Pollo Tropical"/> waitTime="15 min" avgPrice="$10" menu="https://www.tapingo.com/order/restaurant/pollo-tropical-reitz-union-uf/" logo= "" />
						</div>
						<div class= "list-mi-apa">
							<ListElement restaurantTrigger={restaurantTrigger} name="Mi Apa" icon = <img src={mi_apa} alt="Mi Apa"/> waitTime="10 min" avgPrice="$7" menu="https://www.miapalatincafe.com/menu" logo= "" />
						</div>
					</div>
			</div>
		}
		else if (display == 1) {

			// This renders the search bar, and the results of the search bar.
			// It should be contained all within the Search component. I'll fix that.

			page = <div class="pt-14">
				<Search searchTrigger={searchTrigger}/>
			</div>
		}
		else if (display == 2) {

			// This renders the Settings page. This is a good starting place,
			// if you're looking to work on something.

			page = <div class="pt-14">
				<Settings />
			</div>
		}
		else if (display == 3) {
			// This renders the Resturants page. This is a good starting place,
			// if you're looking to work on something. Don't worry about the logic
			// behind setting a specific resturant, I can handle that. Just the
			// basic HTML/TailwindCSS layout would be great.
			if (restaurantName === "Panda Express") {
				page = <div class="pt-14">
					<div class = "panda-page">
						<ResturantPage name = "Panda Express" food = <img src={panda_food} alt="Panda Express" /> wait = "Wait Time: 15 min" price = "Average Price: $10" menu = "https://www.tapingo.com/order/restaurant/panda-express-reitz-union-uf/" />
					</div>
				</div>
			}

			else if (restaurantName === "Pollo Tropical") {
				page = <div class="pt-14">
					<div class = "pollo-page">
						<ResturantPage name = "Pollo Tropical" food = <img src={pollo_food} alt="Pollo Tropical" /> wait = "Wait Time: 15 min" price = "Average Price: $10" menu = "https://www.tapingo.com/order/restaurant/pollo-tropical-reitz-union-uf/" />
					</div>
				</div>
			}

			else if (restaurantName === "Starbucks") {
				page = <div class="pt-14">
					<div class = "starbucks-page">
						<ResturantPage name = "Starbucks" food = <img src={starbs_food} alt="Starbucks" /> wait = "Wait Time: 5 min" price = "Average Price: $5" menu = "https://www.tapingo.com/order/restaurant/reitz-union-starbucks-uf/" />
					</div>
				</div>
			}

			else if (restaurantName === "Mi Apa") {
				page = <div class="pt-14">
					<div class = "mi-apa-page">
						<ResturantPage name = "Mi Apa" food = <img src={mi_apa_food} alt="Mi Apa" /> wait = "Wait Time: 10 min" price = "Average Price: $7" menu = "https://www.miapalatincafe.com/menu" />
					</div>
				</div>
			}
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