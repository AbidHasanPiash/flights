// Importing necessary modules and components
'use client'
import React, { useState } from 'react'
import ButtonText from '../common/ButtonText';

// The main component for displaying hot deals
export default function HotDeals() {
    // An array of deal categories
    const Deals = ['All', 'Flight', 'Hotel', 'Tour', 'Others'];

    // State to keep track of the currently active deal category
    const [activeOption, setActiveOption] = useState(Deals[0]);

    // Function to handle a click event on a deal category
    const handleOptionClick = (option) => {
      setActiveOption(option);
    };

    return (
        <section>
            <div className='flex flex-col md:flex-row justify-between space-y-3 md:space-y-0'>
                {/* Title for the hot deals section */}
                <h1 className='text-3xl font-semibold'>Hot Deals</h1>

                {/* Displaying deal categories as buttons */}
                <div className='bg-primary/10 text-primary text-sm font-semibold rounded-full space-x-5 py-1.5 px-4 flexCenter'>
                    {Deals.map((option, index) => (
                        <ButtonText
                            key={index}
                            text={option}
                            isActive={option === activeOption}
                            onClick={() => handleOptionClick(option)}
                        />
                    ))}
                </div>
            </div>

            {/* Grid for displaying hot deals */}
            <div className='py-6 grid md:grid-cols-2 gap-6'>
                {/* First hot deal card */}
                <div className='overflow-hidden rounded-xl'>
                    <div className='w-full h-72 bg-[url("/images/airplane1.jpg")] bg-cover hover:scale-105 duration-200 cursor-pointer'>
                        {/* Overlay with gradient and text */}
                        <div className='w-full h-full bg-gradient-to-br from-primary-light/80 to-transparent'>
                            <h1 className='px-8 py-5 text-3xl text-white'>Get Air Ticket At <br /> Lowest Price</h1>
                        </div>
                    </div>
                </div>

                {/* Second hot deal card */}
                <div className='overflow-hidden rounded-xl'>
                    <div className='w-full h-72 bg-[url("/images/airplane2.jpg")] bg-cover hover:scale-105 duration-200 cursor-pointer'>
                        {/* No overlay or text for this card */}
                    </div>
                </div>
            </div>
        </section>
    )
}
