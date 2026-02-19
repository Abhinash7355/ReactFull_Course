import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='navbar '>
            <div className='logo'>
              <h2>Abhinash..</h2>
              <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
              </div>
      
            </div>
        </div>
    </div>
  )
}

export default Navbar
