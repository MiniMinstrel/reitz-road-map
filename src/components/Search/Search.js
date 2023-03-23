import React, { useState } from 'react';

function Search() {
	const [restaurant, setRestaurant] = useState("");
  
	return (
		<div class="search">
			<h1>Search</h1>
			<form>
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