// import React from 'react'

import Headings from "./Headings";

export default function WorkHour() {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <div className="flex items-center gap-2">
                <img src='Svgs/clock.svg' alt='icon' loading='lazy'/>
                <Headings header='Today`s Work Hour'/>
            </div>
            <button className="filter-btn border-1 border-gray-300 bg-white px-3 py-1 rounded-lg text-gray-400">Details</button>
        </div>
    </div>
  )
}
