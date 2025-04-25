import { tabs } from "../../../../data/SpotlightTabs";
import Headings from "../Headings";

// No employee data fallback component
export const NoEmployeeData = () => (
  <div className="flex flex-col h-full text-center">
    <div className="flex items-center justify-between pb-4">
      <div className="flex items-center gap-2">
        <img src="Svgs/medal-starss.svg" alt="icon" loading="lazy" />
        <Headings header="Employee Spotlight" />
      </div>
    </div>
    <div className="flex justify-around px-1 py-1 bg-gray-200 rounded-lg">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          className="flex-1 py-2 text-sm outline-0 border-0 capitalize transition-all duration-300 text-gray-500 hover:text-gray-700"
        >
          {label}
        </button>
      ))}
    </div>
    <div className="flex flex-col justify-center items-center h-full gap-5">
        <img src="Svgs/Empty States [HR Management] [1.0].svg" alt="icon" loading="lazy" />
        <p className="text-sm text-gray-400 mt-2 text-center">No records of employee spotlight yet. <br/>Please check back later.</p>
    </div>
  </div>
);