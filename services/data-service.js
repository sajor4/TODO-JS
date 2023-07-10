class DataService{

    static getData(){
        const ToDo1 = new ToDo('Comprare il latte', false, new Date(2023, 6, 8));
        const ToDo2 = new ToDo('Scrivere una lettera', false, new Date(2023, 6, 4));
        const ToDo3 = new ToDo('Studiare JS', true, new Date(2023, 6, 1));
        const ToDo4 = new ToDo('Fare il compito di matematica', false, new Date(2023, 5, 30));
        const ToDo5 = new ToDo('Passare l aspirapolvere', false, new Date(2023, 5, 21));
        const ToDo6 = new ToDo('Pagare le bolette', true, new Date(2023, 4, 10));

        const todosArray = [ToDo1,ToDo2,ToDo3,ToDo4,ToDo5,ToDo6];
        return todosArray;
    }
    
}