import Note from "../components/note"
import Add from "../assets/plus.png"

export default function Notes() {
  function createNote() {
    
  }

  return (
    <div className='flex flex-col h-screen col-span-1 md:col-span-1 px-2 relative'>
      <h1 className="text-left text-2xl mt-6 font-semibold px-1">Notes</h1>

      <div className="flex gap-2 flex-wrap">
        <Note />
        <Note />
        <Note />
        <Note />
      </div>

      <button className="absolute bottom-5 right-5 rounded-full cursor-pointer flex justify-center items-center shadow-lg size-12 bg-neutral-900/20 text-white">
        <img src={Add} alt="add icon" className="size-4" />
      </button>
    </div>
  )
}