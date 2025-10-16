import Note from "../components/note";
import AddBlack from "../assets/plus.png";
import AddWhite from "../assets/plus-dark.png";
import ThemeToggle from "../components/theme";
import { useState } from "react";
import { useNotes } from "../hooks/useNotes";

export default function Notes() {
  const [newNote, setNewNote] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const {notes, setNotes, editingId, setEditingId, handleSave, deleteNote, handleEdit,} = useNotes();

  const currentDate = new Date().toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    }
  );

  function onSave() {
    handleSave(newTitle, newNote, currentDate);
    setNewTitle("");
    setNewNote("");
    setShowPopUp(false);
  }

  function onEdit(note) {
    const {title, text} = handleEdit(note);
    setNewTitle(title);
    setNewNote(text);
    setShowPopUp(true);
  }

  return (
    <div className="h-[87vh] md:h-full flex flex-col col-span-1 md:col-span-1 px-2 @container">
      {showPopUp && <div className="absolute inset-0 bg-white/90 dark:bg-black/90 z-10 h-full w-full" onClick={() => setShowPopUp(false)}></div>}

      <div className="flex justify-between items-center mt-6">
        <h1 className="sticky top-0 text-left text-2xl font-semibold px-1">Notes</h1>
        <ThemeToggle />
      </div>

      <div className="flex flex-col gap-1 mt-3 h-[85cqh] [@media_(min-height:800px)_and_(max-height:900px)]:h-[88cqh] [@media_(min-height:901px)_and_(max-height:1000px)]:h-[90cqh] [@media_(min-height:1001px)]:h-[100cqh] overflow-y-auto scrollbar">
        {notes.map(item => ( 
          <Note key={item.id}
           title={item.title}
           text={item.text}
           id={item.id}
           deleteNote={deleteNote}
           handleEdit={() => onEdit(item)}>
          <h2 className="text-semibold mb-0.5">{item.title}</h2>
          <p className="text-xs line-clamp-1 text-neutral-700 dark:text-neutral-400 pr-3 mb-2">{item.text}</p>
          <p className="text-[10px] text-neutral-600 dark:text-neutral-400">{item.date}</p>
          </Note>
        ))}
      </div>

      <button className="absolute bottom-5 right-5 rounded-full cursor-pointer flex justify-center items-center shadow-lg size-12 bg-neutral-900 dark:bg-neutral-300"
      onClick={() => setShowPopUp(true)}>
        <img src={AddWhite} alt="add icon" className="size-5 dark:hidden" />
        <img src={AddBlack} alt="add icon" className="size-5 hidden dark:block" />
      </button>

      {showPopUp && <div className="absolute z-40 top-[40%] left-[50%] -translate-[50%] bg-gray-300 dark:bg-neutral-800 size-96 rounded-md p-3">
        <input type="text"
         className="text-xl font-semibold w-full focus:outline-none focus:ring-0"
         value={newTitle}
         placeholder="Title"
         onChange={e => setNewTitle(e.target.value)}/>

        <div className="text-xs text-neutral-600 dark:text-neutral-500">
          {currentDate}
        </div>

        <textarea placeholder="Start Writing"
        className="w-full h-[72%] resize-none focus:outline-none focus:ring-0 my-2 border border-white/70 rounded-sm p-1 scrollbar"
        onChange={e => setNewNote(e.target.value)}
        value={newNote}        
        />

        <div className="flex justify-end items-center">
          <button className="rounded-full cursor-pointer shadow-md dark:shadow-neutral-080 bg-neutral-800 dark:bg-neutral-300 text-white dark:text-black text-sm px-2.5 py-2 font-semibold" onClick={onSave}>Done</button>
        </div>
      </div>}
    </div>
  )
}