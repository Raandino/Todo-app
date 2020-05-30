import { h} from 'preact';
import { Input, Form, Button, Modal, DatePicker } from 'antd'


const Editar = ({todo, closeForm, showModal}) =>{

  const [form] = Form.useForm()
  const editTodo = e =>{
      console.log(form)
  }
    return(

      <Modal id="modal" title='Edit Form'
      visible={showModal}
      onCancel={closeForm}
      footer={[
          <Button onClick={closeForm} >
              Cancel
          </Button>,
          <Button onClick={}>Submit</Button>
      ]}
      >
          <Form form={form} onFinish={editTodo}>
          <Form.Item
          label='Todo' 
          name='todo'>
              <Input/>
              </Form.Item> 
              <Form.Item
          label='Descripcion' 
          name='descripcion'>
          
              <Input/>
              </Form.Item> 
              <Form.Item
          label='Pendiente' 
          name='pendiente' >
          
              <Input type="radio" name="estado" value="notdone"/>
              </Form.Item> 
              <Form.Item
          label='Realizada' 
          name='Realizada'>
              <Input type="radio" name="estado" value="done"/>
              </Form.Item> 


              
              <Form.Item
                  label='Date'
                  name='date'
              >
                  <DatePicker ></DatePicker>
              </Form.Item>
          </Form>
  </Modal>



    )
}


function TodoItems({todos=[]}) {

  
  return (
    <div className="container">
      <div className="row mt-4">
      {
        todos.map(todo=>(
         <div className="col-md-4 mt-4">
            <div className="card" >
              <div className="card-header" id="taskh">
             <h3>{  `${todo.todo}` }</h3> 
              </div>
                <div className="card-body">
              {
                `${todo.date} - ${todo.descripcion}`
              }
              </div>

              <div className="card-footer">
                <div className="text-center">
                
              <button id="editar" class="btn btn-primary mr-4 active">Editar</button>
              <button id="eliminar" class="btn btn-primary ml-4 active">Eliminar</button>
              <Editar> </Editar>
              </div>
              </div> 
              
            </div>
            </div>
       
        ))
      }
      </div>
    </div>
  )
}

export default TodoItems;
