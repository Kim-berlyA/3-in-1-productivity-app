import Bin from '../assets/bin.png'

export default function Note({id, children, deleteNote, handleEdit}) {
  return (
    <div className="relative h-fit w-full p-3 bg-neutral-200 rounded-xl flex-1 cursor-pointer" onClick={handleEdit}>
      {children}
      <button className='absolute bottom-3 right-3 cursor-pointer' onClick={(event) => {deleteNote(id); event.stopPropagation();}}>
        <img src={Bin} alt="trash icon" className='size-4'/>
      </button>
    </div>
  )
}