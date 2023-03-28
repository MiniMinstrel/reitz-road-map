import React, { useState } from 'react';

function Search() {
	const [restaurant, setRestaurant] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
    	alert(`The restaurant you entered was: ${restaurant}`)
		if (restaurant === "Panda Express") {

		}

		else if (restaurant === "Pollo Tropical") {
			
		}

		else if (restaurant === "Starbucks") {

		}

		else if (restaurant === "Mi Apa") {
			
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