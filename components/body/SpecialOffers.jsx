import React from 'react'

export default function SpecialOffers() {
  return (
    <section>
        <div className='flex justify-between'>
            <h1 className='text-3xl font-semibold'>Special Offers</h1>
            <button className='text-primary text-sm font-semibold flexCenter px-2'>
                View All
            </button>
        </div>
        <div className='py-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='overflow-hidden rounded-xl'>
                <div className='w-full h-80 bg-[url("/images/offer1.jpg")] bg-cover overflow-hidden hover:scale-105 duration-200 cursor-pointer'>
                </div>
            </div>
            <div className='overflow-hidden rounded-xl'>
                <div className='w-full h-80 bg-[url("/images/offer2.jpg")] bg-cover overflow-hidden hover:scale-105 duration-200 cursor-pointer'>
                </div>
            </div>
            <div className='overflow-hidden rounded-xl'>
                <div className='w-full h-80 bg-[url("/images/offer3.jpg")] bg-cover overflow-hidden hover:scale-105 duration-200 cursor-pointer'>
                </div>
            </div>
        </div>
    </section>
  )
}
