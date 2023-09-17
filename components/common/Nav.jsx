// Import necessary modules and components
import React from 'react'
import ButtonFlat from './ButtonFlat'
import Image from 'next/image'

// Navigation component for the top header
export default function Nav() {
  return (
    // Top header with a specific height and background color
    <nav className='h-20 bg-primary text-day'>
        {/* Container for the header content */}
        <div className='h-full spaceing flexBetween'>
            {/* Logo displayed in the header */}
            <div>
                <Image
                    src={'/logos/brac-logo.png'} // Image source path
                    alt='brac-logo'               // Image alt text
                    width={140}                  // Image width
                    height={80}                  // Image height
                />
            </div>
            
            {/* Sign In button in the header */}
            <ButtonFlat text={'Sign In'}/>
        </div>
    </nav>
  )
}
