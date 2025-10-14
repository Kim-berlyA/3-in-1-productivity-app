import closeIcon from '../assets/close.png';
import checkedIcon from '../assets/checkbox-black.png';
import uncheckedIcon from '../assets/unchecked-black.png';
import checkedIconDark from '../assets/checkbox-white.png';
import uncheckedIconDark from '../assets/unchecked-white.png';

export default function ToDoItems({text, id, isComplete, deleteTodo, toggleTodo}) {
  return (
    <li onClick={() => toggleTodo(id)} className="border-2 border-gray-300 dark:border-neutral-700 rounded-md px-3 py-2 flex items-center justify-between mt-2 cursor-pointer">
      <div className="flex items-center gap-2">
        <img
        src={isComplete ? checkedIconDark : uncheckedIconDark}
        className="size-4 hidden dark:block" />
        <img
        src={isComplete ? checkedIcon : uncheckedIcon}
        className="size-4 dark:hidden" />

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