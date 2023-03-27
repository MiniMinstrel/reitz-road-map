import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Search from './components/Search/Search';

function App() {

// Creates a React state that determines what's displayed.
  const [entryKey, setEntryKey] = useState(0);
  const [contentKey, setContentKey] = useState(0);

// Functions that handle the clicks on the button divs.
  const entryAHandler = (event) => {
    setEntryKey(1);
  }

  const entryBHandler = (event) => {
    setEntryKey(2);
  }

// Function that handles changes to the content from the NavBar.

  const changeKey = (value) => {
    setContentKey(value);
  }

// Page variable that'll be rendered.
  let page;

// Conditionals. If the page just loaded (0), then load the title page. If "Design A" div
// is clicked, run entryAHandler, and display Design A page. If "Design B" div is clicked,
// run entryBHandler, and display Design B page. Both Header and Navbar components are included.
// Additionally, Content contains the body of the application, whether map, list, settings, search,
// or resturant. 

  if (entryKey == 0) {
    page = 
      <div class="flex flex-col justify-center items-center h-screen bg-blue-500">
        <h1 class="text-white text-5xl font-bold mb-10">Welcome To</h1>
        <h1 class="text-orange-400 text-6xl font-bold italic mb-10">RRM</h1>
        <div class="flex space-x-4">
          <div onClick={entryAHandler} class="bg-white text-blue-500 hover:bg-orange-400 hover:text-white transition ease-in-out duration-300 px-4 py-2 rounded-lg shadow-md">Design A</div>
          <div onClick={entryBHandler} class="bg-white text-blue-500 hover:bg-orange-400 hover:text-white transition ease-in-out duration-300 px-4 py-2 rounded-lg shadow-md">Design B</div>
        </div>
      </div>
  }
  else if (entryKey == 1) {
    page =
      <div>
        <Header />
        <Content entryKey={entryKey} currentDisplay={contentKey} changeKey={changeKey} />
        <Navbar changeKey={changeKey} />
      </div>;
  }
  else if (entryKey == 2) {
    page =
      <div>
        <Header />
        <Content entryKey={entryKey} currentDisplay={contentKey} changeKey={changeKey}/>
        <Navbar changeKey={changeKey} />
      </div>
  }

//Render contents of page variable. 
  return (
    <div>
    { page }
    </div>
  );
}

export default App;
