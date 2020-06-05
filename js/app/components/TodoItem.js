import {h, Component } from 'preact'
import { Modal } from 'antd'
import {useModal} from '../hooks'
import Editar from './Editar'
import EliminarTodo from './EliminarTodo'
import TodoContext from '../context/TodoContext'
import { useEffect } from 'preact/hooks/src'
import moment from 'moment'

const TodoItem = ( {todo ,indice} ) => {

    const [showEdit, openEdit, closeEdit ] = useModal()
    
    const [ showDelete, openDelete, closeDelete ] = useModal()

    
    console.log('Delet Item Modal',showEdit)

    const date =   moment(todo.endDate).format('DD-MM-YYYY')
   

    return ( 
        // <div className="col-md-4 mt-4">
        <div  id="todo1"   class="card todo  " onClick={openEdit}>     
          <div id="cuerpecito" className="  blockquote card-body text-center">
            <div  class="h3">{  `${todo.todo}` }</div>
            <div  class=" h6   my-3 ">{date}</div>
            <hr class="my-2"></hr>
                {
                  `${todo.descripcion}`
                } 
            <hr class="my-2"></hr>
            {/* <button id="editar" class="  mt-2 btn btn-warning   my-1  mx-4 active" onClick={openEdit}>Editar</button>
            <button id="eliminar" class="mt-2 btn btn-warning   my-1  mx-4 active" onClick={openDelete}>Eliminar</button> */}
            <Editar showModal={showEdit} closeForm={closeEdit} todo={todo} indice={indice}> </Editar>
            <EliminarTodo showModal={showDelete} closeModal={closeDelete}indice={indice} ></EliminarTodo>
          </div>
        </div>
        // </div>
     
    )

}

export default TodoItem