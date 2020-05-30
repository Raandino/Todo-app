import { h} from 'preact';
import { Input, Form, Button, Modal, DatePicker } from 'antd'
import TodoItem from './TodoItem'




function TodoItems({todos=[]}) {

  
  return (
    <div className="container">
      <div className="row mt-4">
      {
        todos.map(todo=><TodoItem todo={todo}></TodoItem>)
      }
      </div>
    </div>
  )
}

export default TodoItems;
