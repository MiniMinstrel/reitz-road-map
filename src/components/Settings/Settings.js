import React, { useState } from 'react';

import moon from '../DesignA/Images/moon.png';

const Settings = (props) => {

	// This is the settings page, which should just have
	// two settings: Dark Mode and I believe font size.
	// I don't have the settings mockup up right now, but 
	// having those two options are the goal. The logic I can
	// handle unless you'd like to, oh dear reader.

	return(
		<div class="settings">
			<h1>Settings</h1>
			<p> <img src={moon} alt="Moon" /> Dark Mode</p>
			<p>Font Size</p>
		</div>
		)
}

export default Settings;