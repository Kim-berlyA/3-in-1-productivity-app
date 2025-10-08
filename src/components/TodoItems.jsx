import closeIcon from '../assets/close.png';
import checkedIcon from '../assets/checkbox-black.png';
import uncheckedIcon from '../assets/unchecked-black.png';

export default function ToDoItems({text, id, isComplete, deleteTodo, toggleTodo}) {
  return (
    <li onClick={() => toggleTodo(id)} className="border border-gray-300 rounded-md px-3 py-2 flex items-center justify-between mt-2 cursor-pointer">
      <div className="flex items-center gap-2">
        <img
        src={isComplete ? checkedIcon : uncheckedIcon}
        className="size-4" />

        <span className={isComplete ? 'line-through text-gray-400' : ''}>
          {text}
        </span>
      </div>

      <button>
        <img
        onClick={() => deleteTodo(id)}
        src={closeIcon}
        alt="Close"
        className="size-4 cursor-pointer"
        />
      </button>
    </li>
  )
}