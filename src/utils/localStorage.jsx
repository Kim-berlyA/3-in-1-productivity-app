export function saveToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos))
}

export function getFromLocalStorage() {
  localStorage.getItem("todos")
}