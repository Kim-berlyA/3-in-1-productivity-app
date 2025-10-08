import { useRef, useState } from 'react';
import plusIcon from '../assets/plus.png';
import ToDoItems from "../components/TodoItems";

export default function ToDo() {
  let nextId = useRef(0);
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  function addTodo() {
    let inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {id: nextId.current++, text: inputText, isComplete: false}

    setTodos(prevTodos => [...prevTodos, newTodo]);
    inputText = "";
  }

  function deleteTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map(todo => todo.id === id ? {...todo, isComplete:!todo.isComplete} : todo)
    );
  }

  return(
    <div className='h-screen col-span-1 md:col-span-1 md:border-r md:border-gray-300 overflow-y-scroll'>
      <div className="flex flex-col justify-center items-center px-2">
        <div className="w-full">
          <div className='sticky top-0 bg-white py-3'>
            <h1 className="text-left text-2xl mt-3 font-semibold px-1">To-Do List</h1>
            <form 
            action={addTodo}
            className="relative">
              <input 
              ref={inputRef}
              type="text"
              placeholder="Add a Todo..."
              autoComplete="off"
              className="w-full mt-3 bg-gray-200 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-100 ease-in cursor-pointer" />

              <button>
                <img
                  src={plusIcon}
                  alt="add to do"
                  className="size-3 absolute right-3 top-3/5 text-black -translate-y-1/2 cursor-pointer"
                  />
              </button>
            </form>
          </div>

          <ul className='pb-3 h-full'>
            {todos.map((item, index) =>  <ToDoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggleTodo={toggleTodo} /> )}
          </ul>
        </div>
      </div>
    </div>
  )
}