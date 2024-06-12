import React, {useState} from 'react';
import './Navbar.css';
import logo from './img/logo.png' 

function Navbar({headerSearch}) {
  // State to manage the input value in the search box
  const [inputValue, setInputValue] = useState('');

  // Function to handle the search for properties on sale
  const handleClickSale = () =>{
    headerSearch(inputValue,1)
  }
  
  // Function to handle the search for properties for rent
  const handleClickRent = () =>{
    headerSearch(inputValue,0)
  }

  return (
    <div className='main'>
        <div className='headerbar-main'>
            <img className='logo-headerbar' src={logo}/>
            <div className='headerbar-main-searchbox'>
                <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" className='headerbar-main-searchbox-component' placeholder='Search Location...'/>
                    <div className="search-buttonset">
                        <button  onClick={handleClickSale}>FreeHold</button>
                        <button  onClick={handleClickRent}>LeaseHold</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;