import { PiShareFat } from 'react-icons/pi';
import Headings from './Headings';
import { useState } from 'react';
import './DasboardShapesStyles.css';
import MedalBadge from './MedalBadge';
import { NoEmployeeData } from './DataSkeletons/NoSpotlightData';
import { tabs } from '../../../data/SpotlightTabs';



export default function EmployeeSpotlight() {
  const [activeTab, setActiveTab] = useState<'overview' | 'comments' | 'rewards'>('overview');

  const topRatedEmployee = [
    {
      name: 'Victor Idepe',
      rating: 4.9,
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      month: 'April',
      comment: 'I love this place!',
      rewards: 'A laptop, a coffee, and a good book.',
    },
  ];

  const topEmployee = topRatedEmployee[0];

  const renderContent = () => {
    if (!topEmployee) return <p className="text-gray-400 text-sm text-center mt-4">No data to show.</p>;

    switch (activeTab) {
      case 'overview':
        return (
          <div className="p-4 h-full flex flex-col items-center justify-center gap-4 lg:gap-2">
            <div className="w-full flex flex-col items-center text-center">
              <h1 className="text-[18px]">{topEmployee.name}</h1>
              <p className="text-sm text-gray-400">{topEmployee.rating}/5 Rating</p>
            </div>
            <MedalBadge image={topEmployee.image} />
            <p className="text-sm text-gray-400 text-center">
              Top-performing employee of {topEmployee.month}!
            </p>
          </div>
        );
      case 'comments':
        return <div className="p-4 text-sm text-gray-600 text-center">{topEmployee.comment}</div>;
      case 'rewards':
        return <div className="p-4 text-sm text-gray-600 text-center">{topEmployee.rewards}</div>;
      default:
        return null;
    }
  };

  if (topRatedEmployee.length === 0) {
    return (
      <div className="border border-gray-300 rounded-lg p-4 min-h-[380px]">
        <NoEmployeeData />
      </div>
    );
  }

  return (
    <div className="border border-gray-300 rounded-lg p-4 min-h-[380px]">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <img src="Svgs/medal-starss.svg" alt="icon" loading="lazy" />
          <Headings header="Employee Spotlight" />
        </div>
        <button
          className="filter-btn border border-gray-300 bg-white px-2 py-1 rounded-lg text-gray-400 whitespace-nowrap flex items-center gap-2"
          aria-label="Share employee spotlight"
          title="Share"
        >
          <PiShareFat className="w-5 h-5" />
          Share
        </button>
      </div>

      <div className="w-full h-auto">
        <div className="flex justify-around px-1 py-1 bg-gray-200 rounded-lg">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 py-2 text-sm outline-0 border-0 capitalize transition-all duration-300 ${
                activeTab === key
                  ? 'bg-white rounded-lg shadow-sm'
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
  );
}
