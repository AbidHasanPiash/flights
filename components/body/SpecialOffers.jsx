import React from 'react'

// Component for displaying special offers
export default function SpecialOffers() {
  return (
    <section>
        {/* Title and "View All" button */}
        <div className='flex justify-between'>
            <h1 className='text-3xl font-semibold'>Special Offers</h1>
            <button className='text-primary text-sm font-semibold flexCenter px-2'>
                View All
            </button>
        </div>

        {/* Grid for displaying special offer items */}
        <div className='py-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {/* First special offer item */}
            <div className='overflow-hidden rounded-xl'>
                <div className='w-full h-80 bg-[url("/images/offer1.jpg")] bg-cover overflow-hidden hover:scale-105 duration-200 cursor-pointer'>
                    {/* No additional content or overlay for this item */}
                </div>
            </div>

            {/* Second special offer item */}
            <div className='overflow-hidden rounded-xl'>
                <div className='w-full h-80 bg-[url("/images/offer2.jpg")] bg-cover overflow-hidden hover:scale-105 duration-200 cursor-pointer'>
                    {/* No additional content or overlay for this item */}
                </div>
            </div>

            {/* Third special offer item */}
            <div className='overflow-hidden rounded-xl'>
                <div className='w-full h-80 bg-[url("/images/offer3.jpg")] bg-cover overflow-hidden hover:scale-105 duration-200 cursor-pointer'>
                    {/* No additional content or overlay for this item */}
                </div>
            </div>
        </div>
    </section>
  )
}