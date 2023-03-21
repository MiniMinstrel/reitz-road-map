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
      <div>
       <p>Welcome to RRM!</p>
       <p onClick={entryAHandler}>Click here to access version A of the application!</p>
       <p onClick={entryBHandler}>Click here to access version B of the application!</p>
      </div>
  } else if (entryKey == 1) {
    page =
      <div>
        <p>You're here!</p>
        <p>We're now going to load design A!</p>
      </div>;
  } else if (entryKey == 2) {
    page =
      <div>
        <p>You're here!</p>
        <p>We're now going to load design B!</p>
      </div>
  }

  return (
    <div>
    { page }
    </div>
  );
}

export default App;
