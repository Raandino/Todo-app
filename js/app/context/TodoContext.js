import { createContext } from "preact";

const TodoContext = createContext ({
    todoList : [], 
    updateTodo : newTodoList => {
        todoList

    }
})