import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { MdVerified } from "react-icons/md";
import { MinusCirlce } from 'iconsax-reactjs';
import { shiftPeople } from '../../../data/shiftPeople';
import { FaUserCircle } from 'react-icons/fa';
import Headings from './Headings';

export default function ShiftTracker() {
  const ongoingShifts = shiftPeople.filter(person => !person.shiftCompleted);
  const completedShifts = shiftPeople.filter(person => person.shiftCompleted);

  return (
    <div className="border border-gray-300 rounded-lg p-4 h-[380px] flex flex-col">
      <div className="flex items-center justify-between border-b border-gray-300 pb-4">
        <div className="flex items-center gap-2">
          <img src='Svgs/briefcase.svg' alt="Briefcase Icon" className="w-6 h-6" loading='lazy' />
          <Headings header='Shift Tracker'/>
        </div>
        <button className="border border-gray-300 bg-white px-3 py-1 rounded-lg text-gray-400 hover:bg-gray-100 transition">See All</button>
      </div>

      <div className="flex flex-col justify-between h-full w-full gap-3 no-scrollbar mt-5">
        {/* Ongoing Section */}
        <div className="flex flex-col gap-2 h-full w-full">
          <header className="text-start text-xs text-gray-500">Ongoing</header>
          <ul className="grid grid-cols-1 gap-4 w-full max-h-[170px] h-full place-content-start overflow-y-auto no-scrollbar">
            {ongoingShifts.map((person) => (
              <li key={person.id} className="flex items-center gap-4 w-full">
                <div className="relative min-w-[40px] h-[40px] bg-gray-100 rounded-full bg-cover bg-center">
                  {person.image ? (
                    <img src={person.image} alt={person.fullName} className="w-full h-full object-cover rounded-full" loading='lazy' />
                  ) : (
                    <FaUserCircle className="w-full h-full rounded-full text-[#C0D5FF]" />
                  )}
                  {person.verifiedStatus && (
                    <span className="absolute top-0 right-[-2px] bg-white rounded-full flex items-center justify-center">
                      <MdVerified className="w-4 h-4 text-[#48c2fe]" />
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-[14px]">{person.fullName}</h1>
                    <p className="text-sm text-gray-400">By {person.shiftHostedByName}</p>
                  </div>
                  <span className="text-[12px] text-[#FF8447] pl-1 pr-2 py-1 bg-[#FFF1EB] rounded-full flex items-center gap-1 max-h-[25px]">
                    <AccessTimeFilledIcon style={{color: '#FF8447', fontSize: '20px'}} className='w-2 h-2'/> {person.minutesLeft} mins
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className='w-full h-[1px] bg-gray-300 mt-1 Divider'></div>
        </div>

        {/* Completed Section */}
        <div className="flex flex-col gap-2">
          <header className="text-start text-xs text-gray-500">Completed</header>
          <ul className="grid grid-cols-1 gap-4">
            {completedShifts.map((person) => (
              <li key={person.id} className="flex items-center gap-4 w-full">
                <div className="relative min-w-[40px] h-[40px] bg-gray-100 rounded-full bg-cover bg-center">
                  <img src={person.image} alt={person.fullName} className="w-full h-full object-cover rounded-full" loading='lazy' />
                  <span className="absolute bottom-0 right-[-5px] p-1 bg-white rounded-full flex items-center justify-center">
                    <span className='w-2 h-2 bg-gray-400 rounded-full'></span>
                  </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-sm">{person.fullName}</h1>
                    <p className="text-sm text-gray-400">By {person.shiftHostedByName}</p>
                  </div>
                  <span className="text-sm text-[#717784] pl-1 pr-2 py-1 bg-[#F2F5F8] rounded-full flex items-center gap-1 max-h-[25px] whitespace-nowrap">
                    <MinusCirlce size="22" color="#717784" variant="Bold" /> Completed
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
