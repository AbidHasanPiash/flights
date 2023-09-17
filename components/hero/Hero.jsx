// Import necessary modules and components
'use client'
import { useState } from 'react';
import { MdOutlineAirplanemodeActive } from 'react-icons/md';
import { RiHotelLine } from 'react-icons/ri';
import { TbMapSearch } from 'react-icons/tb';
import AirTicket from './AirTicket';
import Hotel from './Hotel';
import Holidays from './Holidays';
import TabButton from '../common/TabButton';

// Data for tabs with text and icons
const tabsData = [
  { text: 'Air Ticket', icon: <MdOutlineAirplanemodeActive size={20} /> },
  { text: 'Hotel', icon: <RiHotelLine size={20} /> },
  { text: 'Holidays', icon: <TbMapSearch size={20} /> },
];

// Hero component for the main page
export default function Hero() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('Air Ticket');

  // Function to set the active tab when clicked
  const handleActiveTab = (text) => {
    setActiveTab(text);
  };

  // Function to render the content of the active tab
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
    // Hero section with background image and content
    <div
      className='bg-[url("/images/hero.jpg")] h-screen md:h-[500px] bg-no-repeat bg-cover text-white'
      style={{
        backgroundImage: `url("/images/hero.jpg")`,
      }}
    >
      <div className='bg-gradient-to-r from-primary-light/50 to-primary/20 w-full h-full'>
        <div className='spaceing h-2/5 md:h-[280px] flex-col flexBetween'>
          {/* Title */}
          <h1 className='w-full pt-20 text-2xl sm:text-2xl lg:text-4xl font-semibold text-center md:text-start'>
            Let's make your adventure!
          </h1>

          {/* Tab buttons */}
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

        {/* Content of the active tab */}
        <div className='bg-primary-dark h-3/5 md:h-[220px] py-5'>{renderActiveTab()}</div>
      </div>
    </div>
  );
}
