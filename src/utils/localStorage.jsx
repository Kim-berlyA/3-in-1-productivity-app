export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function getTodos() {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
}

export function saveTime(time) {
  localStorage.setItem("time", JSON.stringify(time));
}

export function getTime() {
  const savedTime = localStorage.getItem("time");
  return savedTime ? JSON.parse(savedTime) : [];
}

export function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

export function getNotes() {
  const savedNotes = localStorage.getItem("notes");
  return savedNotes ? JSON.parse(savedNotes) : [];
}