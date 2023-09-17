'use client'
import React, { useState } from 'react'
import ButtonText from '../common/ButtonText';

export default function HotDeals() {
    const Deals = ['All','Flight','Hotel','Tour','Others']
    const [activeOption, setActiveOption] = useState(Deals[0]);
    const handleOptionClick = (option) => {
      setActiveOption(option);
    };
  return (
    <section>
        <div className='flex flex-col md:flex-row justify-between space-y-3 md:space-y-0'>
            <h1 className='text-3xl font-semibold'>Hot Deals</h1>
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
        <div className='py-6 grid md:grid-cols-2 gap-6'>
            <div className='overflow-hidden rounded-xl'>
                <div className='w-full h-72 bg-[url("/images/airplane1.jpg")] bg-cover hover:scale-105 duration-200 cursor-pointer'>
                    <div className='w-full h-full bg-gradient-to-br from-primary-light/80 to-transparent'>
                        <h1 className='px-8 py-5 text-3xl text-white'>Get Air Ticket At <br /> Lowest Price</h1>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden rounded-xl'>
                <div className='w-full h-72 bg-[url("/images/airplane2.jpg")] bg-cover hover:scale-105 duration-200 cursor-pointer'>
                </div>
            </div>
        </div>
    </section>
  )
}
