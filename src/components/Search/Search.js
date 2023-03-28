import React, { useState } from 'react';

function Search(props) {
	const [restaurant, setRestaurant] = useState("");
  
	const names = ["Panda Express", "Pollo Tropical", "Starbucks", "Mi Apa"];

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`The text you entered was ${restaurant}`)
		
		for(let i = 0; i < 4; i++) {
			if(restaurant === names[i]) {
				props.searchRestaurantTrigger(restaurant);
			}
		}
		
	}

	return (
		<div class="search">
			<h1>Search</h1>
			<form onSubmit={handleSubmit}>
				<label>Search:
					<input
						type="text"
						value={restaurant}
						onChange={(e) => setRestaurant(e.target.value)}
					/>
				</label>
			</form>
		</div>
	)
  }

export default Search;