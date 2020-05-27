import { h} from 'preact';

function TodoItems({todos=[]}) {
  return (
    <ul>
      {
        todos.map(todo=>(
          <li>
            <div>
              {
                `${todo.todo} - ${todo.date}`
              }
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoItems;
