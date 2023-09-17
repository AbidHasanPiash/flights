import React from 'react'

// A reusable button component with a flat design
export default function ButtonFlat({ text }) {
  return (
    <button className='group relative flex items-center justify-center px-6 py-3 rounded text-sm bg-primary-dark'>
        {/* Stylish hover effect - expands the button background on hover */}
        <span className='absolute bottom-0 w-1/2 h-0 group-hover:w-full group-hover:h-full transition-all duration-200 bg-primary-light/30'></span>
        
        {/* The text content of the button */}
        {text}
    </button>
  )
}
