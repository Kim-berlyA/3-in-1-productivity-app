import { useRef, useState } from 'react';
import NavBar from "../components/navbar";
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
    <div className='h-screen col-span-1 md:col-span-1 md:border-r md:border-gray-300'>
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

          <form 
          action={addTodo}
          className="relative">
            <input 
            ref={inputRef}
            type="text"
            placeholder="Add a Todo..."
            autoComplete="off"
            className="w-full mt-3 bg-gray-200 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-100 ease-in" />

            <button>
              <img
                src={plusIcon}
                alt="add to do"
                className="size-3 absolute right-3 top-3/5 text-black -translate-y-1/2"
                />
            </button>
          </form>

          <ul>
            {todos.map((item, index) =>  <ToDoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggleTodo={toggleTodo} /> )}
          </ul>
        </div>
      </div>
    </div>
  )
}