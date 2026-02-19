import React from 'react'


const Card = (props) => {
  return (
    <div>
       <div className="card">
        <h1 >{props.user} {props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores natus non hic inventore. In, ad? Impedit, sed tempora est, officiis corporis ex nemo assumenda possimus molestiae dolor labore vitae! Earum.</p>
        <img src={props.img} alt="" srcset="" />
        <button>View Profile</button>
        
      </div>
    </div>
  )
}

export default Card
