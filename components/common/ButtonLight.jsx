import React from 'react'

export default function ButtonLight({text}) {
  return (
    <button className='group relative flex items-center justify-center px-4 py-2.5 rounded-md text-sm bg-primary-light'>
        <span className='absolute bottom-0 w-1/2 h-0 group-hover:w-full group-hover:h-full transition-all duration-200 bg-primary/30'></span>
        {text}
    </button>
  )
}
