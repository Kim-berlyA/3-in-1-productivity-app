export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function getTodos() {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
}

