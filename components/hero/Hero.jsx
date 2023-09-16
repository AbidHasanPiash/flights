'use client'
import { useSearchParams } from 'next/navigation';
import { MdOutlineAirplanemodeActive } from 'react-icons/md'
import { RiHotelLine } from 'react-icons/ri'
import { TbMapSearch } from 'react-icons/tb'
import AirTicket from './AirTicket'
import Hotel from './Hotel'
import Holidays from './Holidays'
import TabLink from './TabLink';

export default function Hero() {
    const searchParams = useSearchParams()
    let tab = searchParams.get('tab');
    // Check if tab is empty or not one of the predefined tabs, default to 'airticket'
    if (!tab || !['airticket', 'hotel', 'holidays'].includes(tab)) {
        tab = 'airticket';
    }
  return (
    <div className='bg-[url("/images/hero.jpg")] h-screen md:h-[500px] bg-no-repeat bg-cover text-white'>
        <div className='bg-gradient-to-r from-primary-light/50 to-primary/20 w-full h-full'>
            <div className='spaceing h-2/5 md:h-[280px] flex-col flexBetween'>
                <h1 className='w-full pt-20 text-2xl sm:text-2xl lg:text-4xl font-semibold text-center md:text-start'>Let's make your advanture!</h1>
                <div className='w-full flex items-center justify-center md:justify-start space-x-1'>
                    <TabLink href='/?tab=airticket' icon={<MdOutlineAirplanemodeActive size={20} />} text='Air Ticket' />
                    <TabLink href='/?tab=hotel' icon={<RiHotelLine size={20} />} text='Hotel' />
                    <TabLink href='/?tab=holidays' icon={<TbMapSearch size={20} />} text='Holidays' />
                </div>
            </div>
            <div className='bg-primary-dark h-3/5 md:h-[220px] py-5'>
                {tab === 'airticket' && <AirTicket />}
                {tab === 'hotel' && <Hotel />}
                {tab === 'holidays' && <Holidays />}
            </div>
        </div>
    </div>
  )
}
