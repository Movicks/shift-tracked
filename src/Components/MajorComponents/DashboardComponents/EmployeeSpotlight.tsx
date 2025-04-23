// import React from 'react'
import { PiShareFat } from 'react-icons/pi';
import MedalStar from '../../../Assets/icons/medal-starss.svg';

export default function EmployeeSpotlight() {
  return (
    <div className="border border-gray-300 rounded-lg p-4 max-h-[380px] h-full">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <div className="flex items-center gap-2">
                <img src={MedalStar} alt='icon' loading='lazy'/>
                <h1 className='text-sm font-semibold'>Employee Spotlight</h1>
            </div>
            <button className="filter-btn border-1 border-gray-300 bg-white px-1 py-1 rounded-lg text-gray-400 whitespace-nowrap flex items-center gap-2"><PiShareFat className='w-5 h-5'/> Share</button>
        </div>
    </div>
  )
}
