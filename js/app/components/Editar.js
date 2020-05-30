import {h} from 'preact'
import {Form, Modal, Button, Input, DatePicker} from 'antd'


const Editar = ({todo, closeForm, showModal}) =>{

    const [form] = Form.useForm()
    const editTodo = e =>{
        console.log(form)
    }
        console.log()
      return(
  
        <Modal id="modal" title='Ay Lmao'
        visible={showModal}
        onCancel={closeForm}
        footer={[
            <Button onClick={closeForm} >
                Cancel
            </Button>,
            <Button onClick={editTodo}>Submit</Button>
        ]}
        >
            <Form form={form}
             onFinish={editTodo}
             initialValues={todo}>
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


export default Editar