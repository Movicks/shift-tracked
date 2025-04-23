

export default function ToDo() {
  return (
    <div className="border border-gray-300 rounded-lg p-4 max-h-[380px] h-full">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <div className="flex items-center gap-2">
                <img src='Svgs/note-2.svg' alt='icon' loading='lazy'/>
                <h1 className='text-sm font-semibold'>To-Do</h1>
            </div>
            <button className="filter-btn border-1 border-gray-300 bg-white px-3 py-1 rounded-lg text-gray-400">See All</button>
        </div>
    </div>
  )
}
