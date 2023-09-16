import React from 'react'
import { MdOutlineFlightLand, MdOutlineFlightTakeoff, MdOutlineCalendarMonth } from 'react-icons/md'
import { LuSearch } from 'react-icons/lu'
import ButtonLight from '../common/ButtonLight'

export default function AirTicket() {
  return (
    <div className='spaceing space-y-4'>
        <div className='flex space-x-3'>
            <ButtonLight text={'One Way'}/>
            <ButtonLight text={'Round Way'}/>
            <ButtonLight text={'Multi City'}/>
        </div>
        <div className='grid md:grid-cols-3 gap-2 text-night'>
            {/* Selece destination */}
            <div className='grid grid-cols-1 gap-2'>
                <div className='rounded-lg bg-white'>
                    <div className='h-12 flexStart'>
                        <span className='text-primary px-4'><MdOutlineFlightTakeoff size={30}/></span>
                        <p className='text-sm font-semibold'>DAC, Hazrat Shah Jalal Intl Aitport</p>
                    </div>
                </div>
                <div className='rounded-lg bg-white'>
                    <div className='h-12 flexStart'>
                        <span className='text-primary px-4'><MdOutlineFlightLand size={30}/></span>
                        <p className='text-sm font-semibold'>DXB, Dubai Intl Aitport</p>
                    </div>
                </div>
            </div>
            {/* select date */}
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
            {/* select category and Search */}
            <div className='grid grid-cols-5 gap-2'>
                <div className='col-span-3 grid grid-cols-1 gap-2'>
                    <div className='px-4 rounded-lg bg-white'>
                        <div className='h-12 flexStart'>
                            Economy
                        </div>
                    </div>
                    <div className='px-4 rounded-lg bg-white'>
                        <div className='h-12 flexStart'>
                            1 Passenger
                        </div>
                    </div>
                </div>
                <div className='col-span-2 grid grid-cols-1'>
                    <div className='rounded-lg bg-primary text-white flexCenter'>
                        <div className='h-12 flexCenter flex-col'>
                            <LuSearch size={30}/>
                            <span>Search</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
