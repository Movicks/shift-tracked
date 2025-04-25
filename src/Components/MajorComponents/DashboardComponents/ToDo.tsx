import { FaCheckCircle } from "react-icons/fa";
import { todoList } from "../../../data/todoList";
import Headings from "./Headings";
import NoDatasSkeleton from "./DataSkeletons/NoDatasSkeleton";

export default function ToDo() {
  return (
    <>
      {todoList.length === 0 ? (
        <NoDatasSkeleton header="To-Do" Icon="Svgs/note-2.svg">
          <div className="flex flex-col justify-center items-center h-full gap-5">
              <img src="Svgs/todo No Data.svg" alt="icon" loading="lazy" />
              <p className="text-sm text-gray-400 mt-2 text-center">There are no records of notes yet. <br/>Please check back later.</p>
              <button className="filter-btn border border-gray-300 bg-white px-3 py-1 rounded-lg text-gray-400">
                See All
              </button>
          </div>
        </NoDatasSkeleton>
      ) : (
        <div className="border border-gray-300 rounded-lg p-4 lg:h-[380px]">
          <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <div className="flex items-center gap-2">
              <img src="Svgs/note-2.svg" alt="icon" loading="lazy" />
              <Headings header="To-Do" />
            </div>
            <button className="filter-btn border border-gray-300 bg-white px-3 py-1 rounded-lg text-gray-400">
              See All
            </button>
          </div>

          <ul className="grid grid-cols-1 gap-4 w-full h-full place-content-start overflow-y-auto no-scrollbar pt-5">
            {todoList.map((item, index) => (
              <li className="flex flex-col items-start gap-2 w-full" key={item.id}>
                <div className="flex items-start gap-4 w-full">
                  {item.completed ? (
                    <FaCheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <span className="min-w-5 min-h-5 bg-white border-2 border-gray-400 rounded-full" />
                  )}
                  <div className="w-full flex flex-col gap-1">
                    <h1
                      className={`text-[16px] ${
                        item.completed ? "text-gray-400" : ""
                      }`}
                    >
                      {item.title}
                    </h1>
                    <p className="text-sm text-gray-400">
                      {item.description.length > 40
                        ? `${item.description.slice(0, 45)}...`
                        : item.description}
                    </p>
                    <div className="flex items-center justify-between w-full text-[#717784]">
                      <span
                        className={`px-2 border-2 border-[#ff8447] text-[#FF8447] rounded-full text-sm ${
                          item.completed ? "text-gray-400 border-gray-300" : ""
                        }`}
                      >
                        Today
                      </span>
                      <span className="text-sm text-gray-400">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                {index !== todoList.length - 1 && (
                  <div className="w-full h-[1px] bg-gray-200 Divider"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
