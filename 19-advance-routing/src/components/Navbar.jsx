import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4'>
      <h2 className='text-xl font-bold'>Abhinash</h2>
      <div className='flex gap-8'>
        <Link className='text-lg font-bold' to="/">Home</Link>
        <Link className='text-lg font-bold' to="/about">About</Link>
        <Link className='text-lg font-bold' to="/product">Product</Link>

      </div>
    </div>
  )
}

export default Navbar
Navbar