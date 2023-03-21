import React, { useState } from 'react';
import './App.css';

function App() {

  const [entry, setEntry] = useState('')

  const clickHandler = (event) => {
    setEntry(!entry);
  }

  let page;

  if (entry) {
    page = 
      <div>
       <p>Welcome to RRM!</p>
       <p onClick={clickHandler}>Click here to access the application!</p>
      </div> 
  } else {
    page =
      <div>
        <p>You're here!</p>
        <p onClick={clickHandler}>Click here to go back!</p>
      </div>
  }

  return (
    <div>
    { page }
    </div>
  );
}

export default App;
