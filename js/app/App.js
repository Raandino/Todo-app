import { h, Fragment } from 'preact'
import Router from 'preact-router'
import AsyncRoute from 'preact-async-route'
import Navbar from './components/Navbar'

const App = (props) => { 

    return ( 

        
        <Fragment>
            <Navbar></Navbar>
            <Router>
                {/** Ruta para la Pagina donde se escriben los todo */}
                <AsyncRoute path='/login'
                getComponent={()=> import('./pages/LoginPage').then(module => module.default)}></AsyncRoute>
                {/** Ruta para la Pagina donde se escriben los Todos */}
                 <AsyncRoute path='/'
                getComponent={()=> import('./pages/TodoPage').then(module => module.default)}></AsyncRoute>
            </Router>
        </Fragment>
        
    );
}

export default App