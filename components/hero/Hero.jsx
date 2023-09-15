import React from 'react'
import { MdOutlineAirplanemodeActive } from 'react-icons/md'
import { RiHotelLine } from 'react-icons/ri'
import { TbMapSearch } from 'react-icons/tb'
import ButtonLight from '../common/ButtonLight'

export default function Hero() {
  return (
    <div className='bg-[url("/images/hero.jpg")] h-screen md:h-[500px] bg-no-repeat bg-cover text-white'>
        <div className='bg-gradient-to-r from-primary-light/50 to-primary/20 w-full h-full'>
            <div className='spaceing h-2/5 md:h-[280px] flex-col flexBetween'>
                <h1 className='w-full pt-20 text-2xl sm:text-2xl lg:text-4xl font-semibold text-center md:text-start'>Let's make your advanture!</h1>
                <div className='w-full flex items-center justify-center md:justify-start space-x-1'>
                    <button className='px-4 py-2 rounded-t-md text-sm bg-primary flexCenter space-x-2'>
                        <MdOutlineAirplanemodeActive size={20}/>
                        <span>Air Ticket</span>
                    </button>
                    <button className='px-4 py-2 rounded-t-md text-sm bg-primary-light flexCenter space-x-2'>
                        <RiHotelLine size={20}/>
                        <span>Hotel</span>
                    </button>
                    <button className='px-4 py-2 rounded-t-md text-sm bg-primary-light flexCenter space-x-2'>
                        <TbMapSearch size={20}/>
                        <span>Holidays</span>
                    </button>
                </div>
            </div>
            <div className='bg-primary-dark h-3/5 md:h-[220px] py-5'>
                <div className='spaceing space-y-4'>
                    <div className='flex space-x-3'>
                        <ButtonLight text={'One Way'}/>
                        <ButtonLight text={'Round Way'}/>
                        <ButtonLight text={'Multi City'}/>
                    </div>
                    <ul className='grid grid-cols-12 grid-flow-row-dense gap-2'>
                        <li className='col-span-4 rounded-lg bg-white'><div className='h-12'></div></li>
                        <li className='col-span-4 row-start-2 rounded-lg bg-white'><div className='h-12'></div></li>
                        <li className='col-span-2 row-span-2 rounded-lg bg-white'><div className='h-12'></div></li>
                        <li className='col-span-2 row-span-2 rounded-lg bg-white'><div className='h-12'></div></li>
                        <li className='col-span-2 col-start-9 rounded-lg bg-white'><div className='h-12'></div></li>
                        <li className='col-span-2 col-start-9 rounded-lg bg-white'><div className='h-12'></div></li>
                        <li className='col-span-2 row-span-2  rounded-lg bg-white'><div className='h-12'></div></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
