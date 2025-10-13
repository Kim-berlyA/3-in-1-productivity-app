import ToDo from './pages/todo';
import Timer from './pages/timer';
import Notes from './pages/notes';
import NavBar from './components/navbar';

export default function App() {
  return (
    <div className='h-screen grid grid-cols-1 md:grid-cols-3'>
      <div className='w-full flex md:hidden'>
        <NavBar />
      </div>

      <div className="hidden md:block">
        <ToDo />
      </div>
      <div className="hidden md:block md:border-r md:border-gray-300">
        <Timer />
      </div>
      <div className="hidden md:block h-full">
        <Notes />
      </div>
    </div>
  )
} 
