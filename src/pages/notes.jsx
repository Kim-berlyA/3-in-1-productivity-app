import Note from "../components/note"
import Add from "../assets/plus.png"
import {getNotes, saveNotes} from '../utils/localStorage'
import { useState, useEffect } from "react"

export default function Notes() {
  const [notes, setNotes] = useState(getNotes);
  const [newNote, setNewNote] = useState("");
  const [newTitle, setNewTitle] = useState("Title");
  const [showPopUp, setShowPopUp] = useState(false);
  const [editingId, setEditingId] = useState(null);

  function handleTextChange(event) {
    setNewNote(event.target.value);
  }

  function handleTitleChange(event) {
    setNewTitle(event.target.value);
  }

  useEffect(() => {
    saveNotes(notes);
  }, [notes])

  function handleSave() {
    if (!newTitle || !newNote.trim()) return;

    if (editingId) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingId ? {...note, title: newTitle, text: newNote} : note
        )
      );
    } else {
      const newEntry = {
        id: Date.now(),
        title: newTitle,
        text: newNote,
      };
      setNotes((prev) => [...prev, newEntry]);
    }

    setEditingId(null)
    setNewTitle("Title");
    setNewNote("");
    setShowPopUp(false);
  }

  function deleteNote(id) {
    setNotes(prev => prev.filter((note) => note.id !== id));
  }

  function handleEdit(item) {
    setNewTitle(item.title);
    setNewNote(item.text);
    setEditingId(item.id);
    setShowPopUp(true);
  }

  const currentDate = new Date().toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    }
  );

  return (
    <div className="h-[90vh] md:h-full flex flex-col col-span-1 md:col-span-1 px-2 relative">
      {showPopUp && <div className="absolute inset-0 bg-white/90 z-10 h-full w-full" onClick={() => setShowPopUp(false)}></div>}

      <h1 className="text-left text-2xl mt-6 font-semibold px-1">Notes</h1>

      <div className="flex flex-col gap-1 flex-wrap mt-3">
        {notes.map((item) =>  <Note key={item.id} title={item.title} text={item.text} id={item.id} deleteNote={deleteNote} handleEdit={() => handleEdit(item)}>
          <h2 className="text-semibold mb-0.5">{item.title}</h2>
          <p className="text-xs line-clamp-1 text-neutral-700 pr-3 mb-2">{item.text}</p>
          <p className="text-[10px] text-neutral-600">{currentDate}</p>
        </Note> )}
      </div>

      <button className="absolute bottom-5 right-5 rounded-full cursor-pointer flex justify-center items-center shadow-lg size-12 bg-neutral-900/20 text-white"
      onClick={() => setShowPopUp(true)}>
        <img src={Add} alt="add icon" className="size-4" />
      </button>

      {showPopUp && <div className="absolute z-40 top-[40%] left-[50%] -translate-[50%] bg-gray-300 size-80 rounded-md p-3">
        <input type="text"
         className="text-lg font-semibold w-full focus:outline-none focus:ring-0"
         value={newTitle}
         placeholder="Title"
         onChange={handleTitleChange}/>

        <div className="text-xs text-neutral-600">
          {currentDate}
        </div>

        <textarea placeholder="Start Writing"
        className="w-full h-[72%] resize-none focus:outline-none focus:ring-0 mt-2 border border-white/70 rounded-sm p-1"
        onChange={handleTextChange}
        value={newNote}        
        />

        <div className="flex justify-end items-center">
          <button className="rounded-full cursor-pointer shadow-lg bg-neutral-800 text-white text-sm px-2.5 py-1" onClick={handleSave}>Done</button>
        </div>
      </div>}
    </div>
  )
}