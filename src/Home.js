import React from 'react'
import '././Home.css'
import myprop from './img/house6.jpg'


export default function Home() {
  return (
    <div>
      <div className='sec1'>
        <img src={myprop} alt='' className='image'/>
      </div>
      <div className='heading'>
        <h1>Believe in Finding it</h1>
        <h2 className='sub-heading'>Search for properties You are looking for</h2>
      </div>  
    </div>
  )
}
