// import React from 'react'
import { PiShareFat } from 'react-icons/pi';
import Headings from './Headings';
import { useState } from 'react';
import './DasboardShapesStyles.css'
import MedalBadge from './MedalBadge';


export default function EmployeeSpotlight() {
  const [activeTab, setActiveTab] = useState<'overview' | 'comments' | 'rewards'>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <div className="p-4 h-full flex flex-col items-center justify-center gap-2">
          <div className='w-full flex flex-col items-center text-center'> 
            <h1 className='text-[18px]'>Victor Idepe</h1>
            <p className="text-sm text-gray-400">4.9/5 Ratting</p>
          </div>
          <MedalBadge />
          <p className="text-sm text-gray-400 text-center">Top-performing employee of January!</p>
        </div>;
      case 'comments':
        return <div className="p-4">💬 Here are the user comments.</div>;
      case 'rewards':
        return <div className="p-4">🏆 Check out the rewards here!</div>;
      default:
        return null;
    }
  };

  const tabs: { key: 'overview' | 'comments' | 'rewards'; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'comments', label: 'Comments' },
    { key: 'rewards', label: 'Rewards' },
  ];

  return (
    <div className="border border-gray-300 rounded-lg p-4 h-[380px]">
        <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-2">
                <img src='Svgs/medal-starss.svg' alt='icon' loading='lazy'/>
                <Headings header='Employee Spotlight'/>
            </div>
            <button className="filter-btn border-1 border-gray-300 bg-white px-1 py-1 rounded-lg text-gray-400 whitespace-nowrap flex items-center gap-2"><PiShareFat className='w-5 h-5'/> Share</button>
        </div>
        
        <div className="w-full h-auto">
          <div className="flex justify-around px-1 py-1 bg-gray-200 rounded-lg">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 py-2 text-sm outline-0 border-0 capitalize transition-all duration-300
                  ${
                    activeTab === key
                      ? ' bg-white rounded-lg shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="h-[16rem] pt-3">{renderContent()}</div>
        </div>
    </div>
  )
}
