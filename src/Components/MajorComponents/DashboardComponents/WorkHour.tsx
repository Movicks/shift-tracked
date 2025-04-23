// import React from 'react'
import Clock from '../../../Assets/icons/clock.svg';

export default function WorkHour() {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <div className="flex items-center gap-2">
                <img src={Clock} alt='icon' />
                <h1 className='text-sm font-semibold'>Today`s Work Hour</h1>
            </div>
            <button className="filter-btn border-1 border-gray-300 bg-white px-3 py-1 rounded-lg text-gray-400">Details</button>
        </div>
    </div>
  )
}
