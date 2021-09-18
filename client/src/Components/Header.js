import React, {useEffect, useRef} from 'react'
import Navbar from './Navbar'
import Coding from '../images/pic3.png'
import { init } from 'ityped'



function Header() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Fullstack Developer", "I design, knit & have an incredible love for chocolate"]
    });
  }, []);

  return (
    <div className="main">
      <Navbar/>
      <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src= {Coding} alt="coding" className="second-pic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Melissa Termin</h1>
          <p>
          I am a newly graduate from Developers Institute's Fullstack Javascript program. I am passionate about building usable and visually captivating website.
          </p>
          <p>In my free time, I love to take picture of nature.</p>
          <p>My journey in Israel started in 2016 when I made aliyah from Istanbul, Turkey.</p>
        
         <div>
         <br></br>
         <h3><span ref= {textRef}> </span></h3>
         </div> 
        
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
    </div>
  )
}

export default Header
