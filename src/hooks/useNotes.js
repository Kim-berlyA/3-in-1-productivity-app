import {getNotes, saveNotes} from '../utils/localStorage';
import { useState, useEffect } from "react";

export function useNotes() {
  const [notes, setNotes] = useState(getNotes);
  const [editingId, setEditingId] = useState(null);
  
  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  function handleSave(newTitle, newNote, currentDate) {
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
        date: currentDate,
        title: newTitle,
        text: newNote,
      };
      setNotes((prev) => [...prev, newEntry]);
    }

    setEditingId(null);
  }

  function deleteNote(id) {
    setNotes(prev => prev.filter((note) => note.id !== id));
  }

  function handleEdit(note) {
    setEditingId(note.id);
    return {title: note.title, text:note.text}
  }

  return {notes, setNotes, editingId, setEditingId, handleSave, deleteNote, handleEdit,};
}