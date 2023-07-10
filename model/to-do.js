class ToDo{

    constructor(title, isCompleted = false, creationDate = new Date()){ // mettendo l'uguale metto il valore di default
        this.title = title;
        this.isCompleted = isCompleted;
        this.creationDate = creationDate;
    }

    compareByTitle(toDo){
        return this.title.localeCompare(toDo.title);
    }

    compareByDate(toDo){
        return toDo.creationDate.getTime() - this.creationDate.getTime();
    }

}