import { useState } from "react";
import Todo from "../pages/todo";
import Timer from "../pages/timer";
import Notes from "../pages/notes";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("Timer");

  const tabs = ['To-Do', 'Timer', 'Notes'];

  return (
    <div className="flex flex-col w-full items-center">
      <nav
        className="w-fit border border-gray-300 py-1.5 px-1.5 rounded-full mt-3"
      >
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
              ${activeTab === tab ? 'bg-neutral-800 text-white shadow-sm' : 'text-gray-600'}`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="w-full">
        <div style={{ display: activeTab === "To-Do" ? "block" : "none" }}>
          <Todo />
        </div>
        <div style={{ display: activeTab === "Timer" ? "block" : "none" }}>
          <Timer />
        </div>
        <div style={{ display: activeTab === "Notes" ? "block" : "none" }}>
          <Notes />
        </div>
      </div>
    </div>
  )
}