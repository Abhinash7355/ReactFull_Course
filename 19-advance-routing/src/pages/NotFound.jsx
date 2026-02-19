import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-black text-white relative overflow-hidden">

      {/* Big 404 Text */}
      <h1 className="text-[150px] md:text-[250px] font-extrabold 
                     bg-gradient-to-r from-purple-500 to-blue-500 
                     bg-clip-text text-transparent 
                     animate-pulse">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-gray-400 mt-4">
        Page Not Found
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="mt-8 px-8 py-3 rounded-full 
                   bg-white text-black font-semibold 
                   hover:scale-110 transition duration-300"
      >
        Go Back Home
      </Link>

    </div>
  )
}

export default NotFound
