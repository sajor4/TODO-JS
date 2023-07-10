class Manager{
    constructor(todosArray = []){
        this.todosArray = todosArray;
    }

    addToDo(ToDo){
        this.todosArray.push(ToDo)
    }


    orderByTitle(){
        this.todosArray.sort((ToDo1,ToDo2) => ToDo1.compareByTitle(ToDo2));
    }

    orderByDate(){
        this.todosArray.sort((ToDo1,ToDo2)=>ToDo1.compareByDate(ToDo2));
    }
}