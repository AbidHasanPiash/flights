'use client'
import { useState } from 'react';
import { MdOutlineAirplanemodeActive } from 'react-icons/md';
import { RiHotelLine } from 'react-icons/ri';
import { TbMapSearch } from 'react-icons/tb';
import AirTicket from './AirTicket';
import Hotel from './Hotel';
import Holidays from './Holidays';
import TabButton from './TabButton';

const tabsData = [
  { text: 'Air Ticket', icon: <MdOutlineAirplanemodeActive size={20} /> },
  { text: 'Hotel', icon: <RiHotelLine size={20} /> },
  { text: 'Holidays', icon: <TbMapSearch size={20} /> },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Air Ticket');

  const handleActiveTab = (text) => {
    setActiveTab(text);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Hotel':
        return <Hotel />;
      case 'Holidays':
        return <Holidays />;
      default:
        return <AirTicket />;
    }
  };

  return (
    <div
      className='bg-[url("/images/hero.jpg")] h-screen md:h-[500px] bg-no-repeat bg-cover text-white'
      style={{
        backgroundImage: `url("/images/hero.jpg")`,
      }}
    >
      <div className='bg-gradient-to-r from-primary-light/50 to-primary/20 w-full h-full'>
        <div className='spaceing h-2/5 md:h-[280px] flex-col flexBetween'>
          <h1 className='w-full pt-20 text-2xl sm:text-2xl lg:text-4xl font-semibold text-center md:text-start'>
            Let's make your adventure!
          </h1>
          <div className='w-full flex items-center justify-center md:justify-start space-x-1'>
            {tabsData.map((tab, index) => (
                <TabButton
                    key={index}
                    tab={tab}
                    onPress={() => handleActiveTab(tab.text)}
                    isActive={tab.text === activeTab}
                />
            ))}
          </div>
        </div>
        <div className='bg-primary-dark h-3/5 md:h-[220px] py-5'>{renderActiveTab()}</div>
      </div>
    </div>
  );
}