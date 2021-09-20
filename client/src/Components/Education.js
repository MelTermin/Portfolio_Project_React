import React from 'react'
import educationDetails from '../EducationDetails'

function Education() {
  return (
    <div className="education-container" id="education">
   
     <div >
     
     <h1 className="education-title">Education</h1>
  
     <div class="education-section">
         <div class="timeline">
            <ul>
            { educationDetails.map((item) => {
          return (//dont forget to return it Melissa!!//
          <li  key= {item.id} >
          <h3 className="date">{item.date}</h3>
          <h1 >{item.education_place}</h1>
          <p>{item.details}</p>
          </li>)
        })
      }

           </ul>
         </div>
     </div>
   </div> 
    </div>
  )
}

export default Education
