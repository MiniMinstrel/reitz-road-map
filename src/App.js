import React, { useState } from 'react';
import './App.css';

function App() {

  const [entryKey, setEntryKey] = useState(0);

  const entryAHandler = (event) => {
    setEntryKey(1);
  }

  const entryBHandler = (event) => {
    setEntryKey(2);
  }

  console.log(entryKey);

  let page;

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
  } else if (entryKey == 1) {
    page =
      <div>
        <h1>You're here!</h1>
        <h3>We're now going to load design A!</h3>
      </div>;
  } else if (entryKey == 2) {
    page =
      <div>
        <h1>You're here!</h1>
        <h3>We're now going to load design B!</h3>
      </div>
  }

  return (
    <div>
    { page }
    </div>
  );
}

export default App;
