import React, {useEffect, useRef} from 'react'
import { HiArrowDown} from 'react-icons/hi';
import { init } from 'ityped'
import Mel from '../images/Mel_pic.jpeg'




function About() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Fullstack Developer", "Experienced with PostgresSQL, React, Node.js, & Javascript"]
    });
  }, []);



  return (
    <div className="about-container" id="about" >
       
        <div className="wrapper">
         

          <div className="about-left">
        
            <h2>Hi There, I'm</h2>
            <h1>Melissa Termin</h1>
            <h3><span ref= {textRef}> </span></h3>
             <p>I am a newly graduate from Developers Institute's Fullstack Javascript program. I am passionate about building usable and visually captivating website.</p>
             <p>My journey in Israel started in 2016 when I made aliyah from Istanbul, Turkey.</p>
             <p>I will love to hear from you whether about a job opportunity or just a chat. Feel free to get in touch with me.</p>
      
             <div className="about-btn-wrapper">
                <a className="cv" href="https://docs.google.com/document/d/e/2PACX-1vQw1N-3ezzF2zhYvhTtJF8fOdS0vMkMn8gknucs40WR5RKnWfpt7hs_gIZuHkB5l0QsIkZ6Ck4fMrVq/pub" target="_blank" rel="noreferrer">View CV</a>

                <a className="portfolio-btn" href="#portfolio" ><HiArrowDown size= {15}/> Portfolio</a>

              </div>
          </div>
         
          <div className="imge-wrapper-right">
            <img src= {Mel} alt="pic" className="pic"></img>
          </div>
        
        </div>
    
      </div>
  

   
  )
}

export default About
