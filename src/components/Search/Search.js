import React, { useState } from 'react';

function Search(props) {
	const [restaurant, setRestaurant] = useState("");

	const submitHandler = (event) => {
		console.log(restaurant);

		event.preventDefault();

		props.searchTrigger(restaurant);
	}
  
	return (
		<div class="search">
			<h1>Search</h1>
			<form onSubmit={submitHandler}>
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