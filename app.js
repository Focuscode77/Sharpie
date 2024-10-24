//todo-buton
//todo-container
//todo-list

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Functions

const addTodo = (event) => {
    //Prevent form from submitting
    event.preventDefault();
    //Testing event listner
    console.log('hello');
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= " fa-solid fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)

    //Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class= " fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)
    //Append to List
    todoList.appendChild(todoDiv);
    // Clear Todo Input Value
    todoInput.value = "";

}

const deleteCheck = (event) => {

    const item = event.target;

    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");

        todo.addEventListener('transitionend', function () {

            todo.remove();


        });



    }

    //Check Mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');


    }


}



//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);





