import React, { useState } from 'react';

const ListElement = (props) => {
	return(
		<div>
			<p onClick={props.resturantTrigger}>I'm one of the many resturants you can pick!</p>
		</div>
		)
}

export default ListElement;