import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Function from './Function';
import Footer from './Footer';
import Home from './Home'


function App() {
  // State variables to manage search value and sale/rent status
  const [searchVal, setSearchVal]=useState("");
  const [isSale, setSaleRent]=useState();
  // Function to handle search and set state variables accordingly
  const headerSearch=(searchTerm,isSale)=>{
    setSearchVal(searchTerm);
    setSaleRent(isSale);
  }

  return (
    <div className="App">
      <Navbar headerSearch={headerSearch}/>
      <Home/>
      <div className='App-innerdiv'>
        <Function searchVal={searchVal} isSale={isSale}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
