// import React from 'react'
import ShiftTracker from './ShiftTracker';
import ToDo from './ToDo';
import WorkHour from './WorkHour';
import StaffRatting from './StaffRatting';
import EmployeeSpotlight from './EmployeeSpotlight';


export default function DashboardMain() {
  return (
      <section className="w-full flex flex-col gap-10 md:flex-row lg:justify-between no-scrollbar">
          {/* left hand side */}
          <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-5">
              {/* first card */}
              <ShiftTracker />
              
               {/* second card */}
              <ToDo />

               {/* third card */}
              <div className="grid grid-cols-1 w-full gap-5 max-h-[380px] h-full">
                  {/* clock card */}
                  <WorkHour />
                  {/* star card */}
                  <StaffRatting />
              </div>

               {/* fourth card */}
              <EmployeeSpotlight />
          </div>

          {/* right hand side */}
          <div className="border border-gray-300 rounded-lg lg:!w-[35rem] w-full lg:h-[784px] p-4">
              <div>1</div>
              <div>2</div>
          </div>
    </section>
  )
}
