import Note from "../components/note"

export default function Notes() {
  return (
    <div className='flex flex-col h-screen col-span-1 md:col-span-1 px-2'>
      <h1 className="text-left text-2xl mt-6 font-semibold px-1">Notes</h1>

      <div className="flex gap-2 flex-wrap">
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  )
}