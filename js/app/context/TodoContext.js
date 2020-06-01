import { createContext } from "preact";

const TodoContext = createContext ({
    todoList : [], 
    updateTodo : (index, todo) => {},
    removeTodo : (index)=>{}
})


export default TodoContext