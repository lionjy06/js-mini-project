const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos = [];
const TODO_KEY = "todo";

const saveTodo = () => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
};

const deleteTodo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
};

const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = `X`;
  button.style.marginLeft = `25px`;
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
};

const handleTodo = (event) => {
  event.preventDefault();
  const value = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: value,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
};

todoForm.addEventListener("submit", handleTodo);

const getTodo = localStorage.getItem(TODO_KEY);
if (getTodo !== null) {
  const parsedTodo = JSON.parse(getTodo);
  todos = parsedTodo;

  parsedTodo.forEach(paintTodo);
}
