import React from 'react';

// Renders out the header for both designs. 

const Header = () => {
	return (
		<div>
			<header class="bg-blue-500 text-white flex justify-center items-center py-4 fixed top-0 left-0 right-0 z-10">
  				<h1 class="text-2xl font-bold">
    				<span class="text-orange-500">R</span>eitz
    				&nbsp;&nbsp;  
    				<span class="text-orange-500">R</span>oad
    				&nbsp;&nbsp;  
    				<span class="text-orange-500">M</span>ap 
  				</h1>
			</header>
		</div>
	);
}

export default Header;