// import React from 'react'
import BriefCase from '../../../Assets/icons/briefcase.svg';

export default function ShiftTracker() {
  return (
    <div className="border border-gray-300 rounded-lg p-4 max-h-[380px] h-full">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <div className="flex items-center gap-2">
                <img src={BriefCase} alt='icon' />
                <h1 className='text-sm font-semibold'>Shift Tracker</h1>
            </div>
            <button className="filter-btn border-1 border-gray-300 bg-white px-3 py-1 rounded-lg text-gray-400">See All</button>
        </div>
    </div>
  )
}
