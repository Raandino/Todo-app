import  { h, Fragment } from 'preact'
import TodoItems from '../components/test'

const TodoPage = (props) => {

    return (
    <Fragment>
        <h1> Todo Page</h1>
        <TodoItems></TodoItems>
    </Fragment>


    )
}

export default TodoPage