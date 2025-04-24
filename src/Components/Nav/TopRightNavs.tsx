import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Searchbar from "../Searchbar/Searchbar";
import Notifications from "./Notifications";
import AddRota from '../buttons/AddRota';

export default function TopRightNavs() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => setShowSearch(prev => !prev);

  return (
    <section className='flex items-center gap-2 pl-4 md:pr-4 py-2 relative'>
      <div
        className={`transition-all duration-300 ease-in-out transform origin-right ${
          showSearch ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <Searchbar />
      </div>

      <button
        onClick={toggleSearch}
        className='flex items-center justify-center min-w-10 min-h-10 rounded-lg focus:bg-[#F5F7FA] hover:bg-gray-50 transition duration-200'
      >
        <CiSearch className="w-7 h-7" />
      </button>

      <Notifications />
      <AddRota />
    </section>
  );
}
