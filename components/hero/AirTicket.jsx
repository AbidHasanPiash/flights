// Import necessary modules and components
'use client'
import React, { useState } from 'react'
import { MdOutlineFlightLand, MdOutlineFlightTakeoff, MdOutlineCalendarMonth } from 'react-icons/md'
import { LuSearch } from 'react-icons/lu'
import ButtonLight from '../common/ButtonLight'
import MuiSelector from '../common/MuiSelector'

// Component for searching air tickets
export default function AirTicket() {
    // Options for types of trips (One Way, Round Way, Multi City)
    const tripOptions = ['One Way','Round Way','Multi City'];
    
    // State to track the currently active trip option
    const [activeOption, setActiveOption] = useState(tripOptions[0]);

    // Function to handle a click event on a trip option
    const handleOptionClick = (option) => {
      setActiveOption(option);
    };
    
    // Options for departure and arrival airports
    const flightOptions = [
        'DAC, Hazrat Shah Jalal Intl Airport', 
        'DXB, Dubai Intl Airport',
        'ZYL, Osmani International Airport',
        'LCY, London City Airport',
    ];

    // Options for flight classes (Economy, Premium Economy, Business, First Class)
    const classeOptions = [
        'Economy',
        'Premium Economy',
        'Business',
        'First Class',
    ];

    // Options for the number of passengers
    const passengerOptions = [
        '1 Passenger',
        '2 Passengers',
        '3 Passengers',
        '4 Passengers',
    ];

    return (
        // Container for air ticket search options
        <div className='spaceing space-y-4'>
            <div className='flex space-x-3'>
                {/* Display trip options as buttons */}
                {tripOptions.map((option, index) => (
                    <ButtonLight
                    key={index}
                    text={option}
                    isActive={option === activeOption}
                    onClick={() => handleOptionClick(option)}
                    />
                ))}
            </div>
            <div className='grid md:grid-cols-3 gap-2 text-night'>
                {/* Select departure and arrival airports */}
                <div className='grid grid-cols-1 gap-2'>
                    <div className='rounded-lg bg-white'>
                        <div className='h-12 flexStart'>
                            <span className='text-primary px-4'><MdOutlineFlightTakeoff size={30}/></span>
                            <MuiSelector Options={flightOptions}/>
                        </div>
                    </div>
                    <div className='rounded-lg bg-white'>
                        <div className='h-12 flexStart'>
                            <span className='text-primary px-4'><MdOutlineFlightLand size={30}/></span>
                            <MuiSelector Options={flightOptions}/>
                        </div>
                    </div>
                </div>

                {/* Select departure date and return flight */}
                <div className='grid grid-cols-2 gap-2'>
                    <div className='rounded-lg bg-white'>
                        <div className='h-24 md:h-12 grid grid-cols-3 p-3'>
                            <span className='px-1'><MdOutlineCalendarMonth size={30}/></span>
                            <p className='text-sm font-semibold flex flex-col items-center justify-center'>
                                <span>August</span>
                                <span className='text-3xl'>22</span>
                                <span>Tuesday</span>
                            </p>
                        </div>
                    </div>
                    <div className='rounded-lg bg-white'>
                        <div className='h-24 md:h-12 p-4'>
                            <span className=''><MdOutlineCalendarMonth size={30}/></span>
                            <p className='text-sm font-semibold'>
                                Click to Return Flight
                            </p>
                        </div>
                    </div>
                </div>

                {/* Select flight class, number of passengers, and search button */}
                <div className='grid grid-cols-5 gap-2'>
                    <div className='col-span-3 grid grid-cols-1 gap-2'>
                        <div className='px-4 rounded-lg bg-white'>
                            <div className='h-12 flexStart'>
                                <MuiSelector Options={classeOptions}/>
                            </div>
                        </div>
                        <div className='px-4 rounded-lg bg-white'>
                            <div className='h-12 flexStart'>
                                <MuiSelector Options={passengerOptions}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 grid grid-cols-1'>
                        <div className='rounded-lg bg-primary text-white flexCenter'>
                            {/* Search button */}
                            <button className='h-12 flexCenter flex-col active:scale-90 transition duration-200'>
                                <LuSearch size={30}/>
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
