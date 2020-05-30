import  { h, Fragment } from 'preact'
import {useState} from 'preact/hooks'
import { Input, Form, Button, Modal, DatePicker } from 'antd'

import TodoItems from '../components/TodoItems'




const TodoPage = (props) => {
    const [todoItems, setTodoItems] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [form] = Form.useForm()
    const addTodo = e => {
        // Gets Raw Data from the Form
        const todoRawValues = form.getFieldsValue()
        // Transform the Date into usable format
       const todo = {
           todo: todoRawValues.todo,
           descripcion: todoRawValues.descripcion,
           date: todoRawValues.date.format('YYYY-MM-DD')
       }
       console.log(todo)
       // Adds the Todo Item to the array
       setTodoItems([...todoItems, todo])
       // Resets Form
        form.resetFields()
        // Closes the Form
        toggleForm()
    }
    
    const toggleForm = e => {
        setOpenModal(!openModal)
    }

 

    return (
    <Fragment>
        <h1> Todo Page</h1>
        <Button id="addtodo" onClick={toggleForm}> Add Todo</Button>
        
        <Modal id="modal" title='Add Form'
            visible={openModal}
            onCancel={toggleForm}
            footer={[
                <Button onClick={toggleForm} >
                    Cancel
                </Button>,
                <Button onClick={addTodo}>Submit</Button>
            ]}
            >
                <Form form={form} onFinish={addTodo}>
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

        <TodoItems todos={todoItems}></TodoItems>

       
           

    </Fragment>


    )
}

export default TodoPage