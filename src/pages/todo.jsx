import NavBar from "../components/ui/navbar";
import Task from "../components/ui/task";
import { Checkbox } from '@headlessui/react'
import { useState, useRef } from "react";

export default function ToDo() {
  let nextId = useRef(0);
  const [tasks, setTasks] = useState([]);

  const taskItems = tasks.map(task => {
    return (
      <li key={task.id}
      className="border border-gray-300 rounded-md px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
          checked={task.done}
          onChange={() => toggleTask(task.id)}
          className="group block size-4 rounded border bg-white data-checked:bg-black"
          >
            <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14"
            fill="none">
              <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Checkbox>

          <span className={task.done ? 'line-through text-gray-400' : ''}>
            {task.text}
          </span>
        </div>

        <button>
          <img
          src="/close.png"
          alt="Close"
          className="size-3"
          onClick={() => deleteTask(task.id)}
          />
        </button>
      </li>
    )
  })

  function addTask(formData) {
    const newTask = {id: nextId.current++, text: formData.get("task")}
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  function deleteTask(id) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) => {
        return task.id === id ? { ...task, done: !task.done } : task
        console.log(task.done)
      })
    );
  }

  return(
    <div className="flex flex-col justify-center items-center my-3 px-2">
      <NavBar>
        <div className="flex gap-3">
          <button className="bg-gray-300 rounded-full py-2 px-3 ">To-Do</button>
          <button>Timer</button>
          <button className="mr-2">Notes</button>
        </div>
      </NavBar>

      <div className="w-full">
        <h1 className="text-left text-2xl mt-3 font-semibold px-1">To-Do List</h1>

        <form action={addTask} className="relative">
          <input 
          name="task"
          type="text"
          placeholder="Add a Task..."
          autoComplete="off"
          className="w-full mt-3 bg-gray-200 rounded-lg px-3 py-3     focus:outline-none focus:ring-2 focus:ring-black transition-all duration-100 ease-in" />

          <button>
            <img
              src="/plus.png"
              alt="add to do"
              className="size-3 absolute right-3 top-3/5 text-black -translate-y-1/2"
              />
          </button>
        </form>

        <Task>
          {taskItems}
        </Task>
      </div>
    </div>
  )
}