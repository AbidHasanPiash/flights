import React from 'react'
import ButtonFlat from './ButtonFlat'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className='h-20 bg-primary text-day'>
        <div className='h-full spaceing flexBetween'>
            <div>
                <Image
                    src={'/logos/brac-logo.png'}
                    alt='brac-logo'
                    width={140}
                    height={80}
                />
            </div>
            <ButtonFlat text={'Sign In'}/>
        </div>
    </nav>
  )
}
