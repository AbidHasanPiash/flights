import React from 'react'

export default function Hero() {
  return (
    <div className='bg-[url("/images/hero.jpg")] h-screen md:h-[500px] bg-no-repeat bg-cover text-white'>
        <div className='bg-gradient-to-r from-primary-light/50 to-primary/20 w-full h-full'>
            <div className='spaceing h-2/5 md:h-3/5 flex-col flexBetween'>
                <h1 className='w-full pt-20 text-2xl sm:text-2xl lg:text-4xl font-semibold text-center md:text-start'>Let's make your advanture!</h1>
                <div className='w-full flex items-center justify-center md:justify-start space-x-0.5'>
                    <button className='px-6 py-2 rounded-t-md text-sm bg-primary'>
                        <span>Air Ticket</span>
                    </button>
                    <button className='px-6 py-2 rounded-t-md text-sm bg-primary-light'>
                        <span>Air Ticket</span>
                    </button>
                    <button className='px-6 py-2 rounded-t-md text-sm bg-primary-light'>
                        <span>Air Ticket</span>
                    </button>
                </div>
            </div>
            <div className='bg-primary-dark h-3/5 md:h-2/5'>
                <div className='spaceing'>
                    booking
                </div>
            </div>
        </div>
    </div>
  )
}
