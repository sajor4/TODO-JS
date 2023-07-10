// console.log(DataService.getData());
const toDos = DataService.getData();
const manager = new Manager(toDos);

// console.log(toDosList)

function render() {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';

    for (const toDo of manager.todosArray) {
        const div = document.createElement('div');
        div.classList.add('todo-card');

        if (toDo.isCompleted) {
            div.classList.add('todo-completed')
        }

        const titleStrong = document.createElement('strong');
        const titleNode = document.createTextNode(toDo.title);

        titleStrong.appendChild(titleNode);
        div.appendChild(titleStrong);

        const dateSpan = document.createElement('span');
        const dateNode = document.createTextNode(toDo.creationDate.toISOString());

        dateSpan.appendChild(dateNode);
        div.appendChild(dateSpan);


        todoContainer.appendChild(div);
    }
}

render();

function orderByTitle() {
    manager.orderByTitle();
    render();
}

function orderByDate() {
    manager.orderByDate();
    render();
}