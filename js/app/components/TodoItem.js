import {h } from 'preact'
import { Modal } from 'antd'
import {useModal} from '../hooks'
import Editar from './Editar'


const TodoItem = ( {todo} ) => {

    const [showEdit, openEdit, closeEdit ] = useModal()
    
    const [ showDelete, openDelete, closeDelete ] = useModal()


    console.log('Edit Item Modal',showEdit)

    return ( 
        <div className="col-md-4 mt-4">
        <div className="card" >
          <div className="card-header" id="taskh">
         <h3>{  `${todo.todo}` }</h3> 
          </div>
            <div className="card-body">
          {
            `${todo.date?.format('DD-MM-YYYY')} - ${todo.descripcion}`
          }
          </div>

          <div className="card-footer">
            <div className="text-center">
            
          <button id="editar" class="btn btn-primary mr-4 active" onClick={openEdit}>Editar</button>
          <button id="eliminar" class="btn btn-primary ml-4 active">Eliminar</button>
        <Editar
        showModal={showEdit}
        closeForm={closeEdit}
        todo={todo}
        > </Editar>
          </div>
          </div> 
          
        </div>
        </div>
    )

}

export default TodoItem