import React from 'react'

export default function ButtonFlat({text}) {
  return (
    <button className='group relative flex items-center justify-center px-6 py-3 rounded text-sm bg-primary-dark'>
        <span className='absolute bottom-0 w-1/2 h-1 group-hover:w-full group-hover:h-full transition-all duration-200 bg-primary-light/30'></span>
        {text}
    </button>
  )
}
