// This is the ToDo JavaScript

console.log("Js Actively Running");
// Global Structure

let todoList = [];

// Initially Displaying the stuff...
displayItems();

function addToDo() {
  let inputElement = document.querySelector("#task");
  let dateElement = document.querySelector("#todo-date");
  let toDoItem = inputElement.value;
  let toDoDate = dateElement.value;

  if (toDoItem !== "") {
    // checking the empty values before hand...
    todoList.push({ item: toDoItem, dueDate: toDoDate });
    inputElement.value = "";
    dateElement.value = "";
    displayItems();
  }
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";

  // Accumulator Pattern

  for (let i = 0; i < todoList.length; i++) {
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    // Using Object destructuring to short-hand this thing...
    let { item, dueDate } = todoList[i];

    // Creating the new HTML to be injected for Todo Items...
    newHtml += `

        <span id='task-value'>${item}</span>
        <span id='date-value'>${dueDate}</span>
        <button class='del' onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>

        `;
  }

  containerElement.innerHTML = newHtml;
}
