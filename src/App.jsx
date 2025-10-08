import ToDo from './pages/todo'
import NavBar from './components/navbar'

export default function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className='w-full flex md:hidden justify-center'>
        <NavBar />
      </div>
      <ToDo />
    </div>
  )
}
