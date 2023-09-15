import Image from 'next/image'
import React from 'react'

export default function HotDeals() {
  return (
    <section>
        <div className='flex flex-col md:flex-row justify-between space-y-3 md:space-y-0'>
            <h1 className='text-3xl font-semibold'>Hot Deals</h1>
            <div className='bg-primary/10 text-primary text-sm font-semibold rounded-full space-x-10 py-1.5 px-4 flexCenter'>
                <button className='bg-primary rounded-full px-3 text-white'>All</button>
                <button>Flight</button>
                <button>Hotel</button>
                <button>Tour</button>
                <button>Others</button>
            </div>
        </div>
        <div className='py-6 grid md:grid-cols-2 gap-3'>
            <div className='w-full h-72 rounded-xl bg-[url("/images/airplane1.jpg")] bg-cover'>
            </div>
            <div className='w-full h-72 rounded-xl bg-[url("/images/airplane2.jpg")] bg-cover'>
            </div>
        </div>
    </section>
  )
}
