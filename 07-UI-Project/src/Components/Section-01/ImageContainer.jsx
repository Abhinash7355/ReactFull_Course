import React from 'react'

const ImageContainer = (props) => {
  return (
    <div className='w-1/2 flex justify-center'>

      <div className='relative  rounded-3xl overflow-hidden shadow-2xl'>

        <img
          src={props.imageSrc}
          alt="customer"
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-black/50'></div>

        <div className='absolute top-4 left-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold'>
          {props.label}
        </div>

        <div className='absolute bottom-0 p-6 text-white'>
          <p className='text-sm leading-relaxed'>
            {props.description}
          </p>

          <div className='mt-6 flex items-center'>
            <button className='bg-indigo-600 px-5 py-2 rounded-full text-sm font-semibold'>
             {props.buttonText}
            </button>

            <div className='ml-2 bg-indigo-600 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer'>
              →
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ImageContainer
