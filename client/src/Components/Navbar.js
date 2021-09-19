import React from 'react'
import Mel from '../images/Mel_pic.jpeg'


function Navbar() {
  return (
    <div>
      <nav>
        <img src= {Mel} alt="pic" className="pic"></img>
        <ul className="menu">
          <li><a href="/#about">About</a></li>
          <li><a href="/#education">Education</a></li>
          <li><a href="/#portfolio">Portfolio</a></li>
          <li><a href="/#contact">Contact</a></li>
         
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar
