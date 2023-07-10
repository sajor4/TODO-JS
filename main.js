// console.log(DataService.getData());
const toDos = DataService.getData();
const manager = new Manager(toDos);

// console.log(toDosList)

function render() {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';

    for (let i = 0; i < manager.todosArray.length; i++) {
        const toDo = manager.todosArray[i];
        
        const div = document.createElement('div');
        div.classList.add('todo-card');

        if (toDo.isCompleted) {
            div.classList.add('todo-completed');
        }

        const titleStrong = document.createElement('strong');
        const titleNode = document.createTextNode(toDo.title);

        titleStrong.appendChild(titleNode);
        div.appendChild(titleStrong);

        const dateSpan = document.createElement('span');
        const dateNode = document.createTextNode(toDo.creationDate.toISOString());

        dateSpan.appendChild(dateNode);
        div.appendChild(dateSpan);


        

        const completeBtn = document.createElement('button');
        const completeNode = document.createTextNode(toDo.isCompleted ? 'Completato' : ' Da Completare');
        completeBtn.addEventListener('click', () => {
            toDo.isCompleted = !toDo.isCompleted;
            render();
        });

        completeBtn.appendChild(completeNode);
        div.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        const deleteNode = document.createTextNode('Elimina');
        deleteBtn.addEventListener('click', () => {
            manager.deleteToDo(i);
            render();
        });
        
        deleteBtn.appendChild(deleteNode);
        div.appendChild(deleteBtn);


        const title = document.getElementById('titleInput').value;
        const newToDo = document.createElement('div');
        newToDo.textContent = title;
        const myForm = document.getElementById('myForm');
        myForm.addEventListener('submit', () => {
            manager.addToDoWithTitle();
            render();
        });

        todoContainer.appendChild(div);
    }
}

render();

// function render2(){

//     const todoContainer = document.getElementById('todo-container');
//     todoContainer.innerHTML = '';

//     for (const toDo of manager.todosArray){

//         const template = `<div class="todo-card ${toDo.isCompleted ? 'todo-completed' : ''}">
//                                 <strong>${(toDo.title)}</strong>
//                                 <span>${(toDo.creationDate.toISOString())}</span>
//                           </div>`;

//         todoContainer.innerHTML += template;

//     }

// }
// render2();


function orderByTitle() {
    manager.orderByTitle();
    render();
}

function orderByDate() {
    manager.orderByDate();
    render();
}