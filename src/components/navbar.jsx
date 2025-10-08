import { useState } from "react";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("To-Do");

  const tabs = ['To-Do', 'Timer', 'Notes'];

  return (
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
  )
}