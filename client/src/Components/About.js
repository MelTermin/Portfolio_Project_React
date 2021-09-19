import React, {useEffect, useRef} from 'react'

// import Coding from '../images/nature.jpeg'
// import School from '../images/school.jpeg'
 import { init } from 'ityped'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';



function About() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Fullstack Developer", "Experienced with SQL, React, Node.js, & Javascript"]
    });
  }, []);

  return (
    <div className="about-container" id="about" >
       
        <div className="wrapper">
          <br></br>
          <br></br>
          <h2>Hi There, I'm</h2>
          <h1>Melissa Termin</h1>
          <h3><span ref= {textRef}> </span></h3>
          <p>
          I am a newly graduate from Developers Institute's Fullstack Javascript program. I am passionate about building usable and visually captivating website.
          </p>
          <p>My journey in Israel started in 2016 when I made aliyah from Istanbul, Turkey.</p>
          <p>I will love to hear from you whether about a job opportunity or just a chat. Feel free to get in touch with me.</p>
         <div>
         <br></br>
       
         </div> 
        
        </div>
    
      </div>
  

   
  )
}

export default About
