//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//events
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheckButtons);
//filterOption.addEventListener('click', filterTodo);


//functions
//adds the tasks
function addTodo(event) {
    //because it submits the form
    event.preventDefault();

    //creates the div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //creates the todo
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //creating the buttons

    //done button
    const doneButton = document.createElement("button");
    doneButton.innerHTML = '<i class="fas fa-check"> </i>';
    doneButton.classList.add("done-btn");
    todoDiv.appendChild(doneButton);

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"> </i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //appending all this to the list
    todoList.appendChild(todoDiv);

    //clearing the input for a better experience
    todoInput.value = "";
}

//adds functionalities to the buttons
function deleteCheckButtons(event) {
    const button = event.target;
    //delete
    if (button.classList[0] === 'delete-btn') {
        const todo = button.parentElement;
        todo.remove();
    }//check
    else if (button.classList[0] === 'done-btn') {
        const todo = button.parentElement;
        todo.classList.toggle("checked");
    }
    //console.log(event.target);
}

//filters the todos
// function filterTodo(event) {
//     const todos = todoList.childNodes;
//     console.log(event.target.value);
//     todos.forEach(function (todo) {
//         switch (event.target.value) { //this receives the option selected
//             case "All":
//                 todo.style.display = 'flex';
//                 break;
//             case "Done":
//                 if (todo.classList.contains("checked")) {
//                     todo.style.display = 'flex';
//                 }
//                 else {
//                     todo.style.display = 'none';
//                 }
//         }
//     });
// }