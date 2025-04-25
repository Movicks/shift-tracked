// import React from 'react'
import Headings from "../Headings";

interface NoDatasSkeletonProps {
    children: React.ReactNode;
    header: string;
    Icon: string;
}

export default function NoDatasSkeleton({children, header, Icon}: NoDatasSkeletonProps) {
  return (
      <div className="border border-gray-300 rounded-lg p-4 lg:h-[380px]">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <div className="flex items-center gap-2">
            <img src={Icon} alt='icon' loading='lazy' />
            <Headings header={header} />
          </div>
          {/* <button className="filter-btn border-1 border-gray-300 bg-white px-3 py-1 rounded-lg text-gray-400">See All</button> */}
        </div>
  
        <div className="h-full">
            {children}
        </div>
      </div>
    );
}
