import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Input, Form, Button, Modal, DatePicker } from 'antd'
import TodoContext from '../context/TodoContext'
import TodoItems from '../components/TodoItems'
import { useModal } from '../hooks'
import { Select } from 'antd'

// const API_ROUTE='localhost:3000'
const API_ROUTE = 'https://pwa-postgre.heroukuapp.com'

const TodoPage = (props) => {
    const [todoItems, setTodoItems] = useState([])
    console.log('use State')
    const [showModal, openModal, closeModal] = useModal()
    const [form] = Form.useForm()

    const updateTodo = (indice, nuevoTodo) => {
        console.log('Update Todo Indice', indice)
        const nuevoTodoList = [...todoItems]
        nuevoTodoList[indice] = nuevoTodo
        setTodoItems(nuevoTodoList)
    }

    const removeTodo = index => {
        const nuevoTodoList = [...todoItems]
        nuevoTodoList.splice(index, 1)
        console.log('Nuevo Todo List Eliminat', nuevoTodoList)
        setTodoItems(nuevoTodoList)
    }

    useEffect(() => {
        fetch(`${API_ROUTE}/api/1/todos`)
            .then(res => res.json())
            .then((data) => {
                setTodoItems(data)
            })
    }, [])




    const addTodo = e => {
        // Gets Raw Data from the Form
        // Transform the Date into usable format
        const todo = form.getFieldsValue()
        console.log(todo)
        fetch(`${API_ROUTE}/api/1/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(todo)

        })
            .then(res => res.json())
            .then(res => {
                console.log("res", res)
            })

        console.log(todo)
        // Adds the Todo Item to the array

        // Resets Form
        console.log(form)
        form.resetFields()
        // Closes the Form
        closeModal()
        setTodoItems([...todoItems, todo])
    }




    console.log('Todo', todoItems)
    console.log('Show Modal', showModal)


    return (
        <Fragment>
            <h1 className="text-center mt-2" style="color: white; font-weight:bold;"> Things To Do</h1>
            <div className="text-center" >      <Button id="addtodo" onClick={openModal}> Add </Button></div>

            <Modal id="modal" title='Add Form'
                visible={(() => {
                    console.log('Show Modal Add Form', showModal)
                    return showModal
                })()}
                onCancel={closeModal}
                footer={[
                    <Button onClick={closeModal} >
                        Cancel
                </Button>,
                    <Button onClick={addTodo}>Submit</Button>
                ]}
            >
                <Form form={form} >
                    <Form.Item
                        label='Todo'
                        name='todo'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Descripcion'
                        name='descripcion'
                    >

                        <Input />
                    </Form.Item>
                    <Form.Item
                label='Estado' 
                name='status' 
               >
                
                <Select initialValues="pendiente" style={{ width: 120 }} >
                 <Option value="pendiente">Pendiente</Option>
                  <Option value="realizado">Realizado</Option>

                    </Select>
                    </Form.Item> 
                    
    
                    
                    <Form.Item
                        label='Date'
                        name='endDate'
                    >
                        <DatePicker ></DatePicker>
                    </Form.Item>
                </Form>
            </Modal>

            <TodoContext.Provider value={{ todoList: todoItems, updateTodo, removeTodo }}><TodoItems todos={todoItems}></TodoItems></TodoContext.Provider>




        </Fragment>


    )
}





export default TodoPage