import React from 'react'
import { Bookmark } from 'lucide-react';


const Card = (probs) => {
  return (
      
      <div className="card">
        <div className="top">
          <img src={probs.image} alt="" />
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h2>{probs.companyName} <span>{probs.postedTime}</span> </h2>
          <h2>{probs.jobTitle}</h2>
          <div>
            <h4>
              part-time
            </h4>
            <h4>Senior-level</h4>
          </div>
        </div>
        <div className="bottom">
          
            <div className="salary">
            <h3>{probs.salary}</h3>
            <p>{probs.location}</p>
          </div>
          <button className='apply-btn'>
            Apply now
            </button>
          
          
        </div>
      </div>
    

  )
}

export default Card
