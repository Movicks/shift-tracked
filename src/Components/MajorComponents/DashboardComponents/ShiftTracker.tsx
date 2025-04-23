
export default function ShiftTracker() {
  return (
    <div className="border border-gray-300 rounded-lg p-4 max-h-[380px] h-full">
      <div className="flex items-center justify-between border-b border-gray-300 pb-4">
        <div className="flex items-center gap-2">
          <img src='Svgs/briefcase.svg' alt="Briefcase Icon" className="w-6 h-6" loading='lazy' />
          <h1 className="text-sm font-semibold">Shift Tracker</h1>
        </div>
        <button className="border border-gray-300 bg-white px-3 py-1 rounded-lg text-gray-400 hover:bg-gray-100 transition">See All</button>
      </div>
    </div>
  );
}
