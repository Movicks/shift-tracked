// import React from 'react'
import { PiShareFat } from 'react-icons/pi';
import Headings from './Headings';


export default function EmployeeSpotlight() {
  return (
    <div className="border border-gray-300 rounded-lg p-4 h-[380px]">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <div className="flex items-center gap-2">
                <img src='Svgs/medal-starss.svg' alt='icon' loading='lazy'/>
                <Headings header='Employee Spotlight'/>
            </div>
            <button className="filter-btn border-1 border-gray-300 bg-white px-1 py-1 rounded-lg text-gray-400 whitespace-nowrap flex items-center gap-2"><PiShareFat className='w-5 h-5'/> Share</button>
        </div>
    </div>
  )
}
