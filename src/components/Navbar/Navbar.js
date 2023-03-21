import React from 'react';

const Navbar = () => {
	return (
		<div>
			<footer class="bg-blue-500 text-white flex justify-center items-center fixed bottom-0 w-full h-24">
  				<div class="grid grid-cols-1 w-16 h-16 border-4 border-orange-400 
  				bg-white rounded-full fixed bottom-4 left-6 hover:bg-orange-200 transition ease-in-out duration-300">
  					<img class="place-self-center h-8 w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png" alt="Home Icon" />
  				</div>
  				<div class="grid grid-cols-1 w-36 h-36 border-4 border-orange-400 
  				bg-white rounded-full fixed bottom-2 hover:bg-orange-200 transition ease-in-out duration-300">
  					<img class="place-self-center h-20 w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" alt="Magnifying Icon" />
  				</div>
  				<div class="grid grid-cols-1 w-16 h-16 border-4 border-orange-400 
  				bg-white rounded-full fixed bottom-4 right-6 hover:bg-orange-200 transition ease-in-out duration-300">
  					<img class="place-self-center h-10 w-10" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png" alt="Gear Icon" />
  				</div>
			</footer>

		</div>
	);
}

export default Navbar;