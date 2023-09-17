import React from 'react'

// A reusable button component with a light design
export default function ButtonLight({ text, isActive, onClick }) {
  // Determine the button's background color based on its activity state
  const buttonClass = isActive
    ? 'bg-primary'  // Active state background color
    : 'bg-primary/10';  // Inactive state background color

  return (
    // Button element with dynamic background color and click event handler
    <button onClick={onClick} className={`${buttonClass} group relative flex items-center justify-center px-4 py-2.5 rounded-md text-sm bg-primary-light`}>
        {/* Stylish hover effect - expands the button background on hover */}
        <span className='absolute bottom-0 w-1/2 h-0 group-hover:w-full group-hover:h-full transition-all duration-200 bg-primary/30'></span>
        
        {/* The text content of the button */}
        {text}
    </button>
  )
}