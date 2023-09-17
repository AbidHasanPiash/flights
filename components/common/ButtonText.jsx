import React from 'react'

// A reusable button component with text-based styling
export default function ButtonText({ text, isActive, onClick }) {
    // Determine the button's background and text color based on its activity state
    const buttonClass = isActive
      ? 'bg-primary text-white'  // Active state styling
      : 'bg-primary/5';          // Inactive state styling
  
    return (
      // Button element with dynamic background and text color, and click event handler
      <button onClick={onClick} className={`${buttonClass} rounded-full px-2`}>
        {text}
      </button>
    )
}
