import { h, Fragment } from 'preact'
import Router, { route } from 'preact-router'
import AsyncRoute from 'preact-async-route'
import Navbar from './components/Navbar'
import { useContext } from 'preact/hooks'
import UserContext from './context/UserContext'



const App = (props) => { 
    const  {user} = useContext(UserContext)
  
    const handleRouteChange = e => {
        if(!user && e.url === '/') {
            route('/login', true)
        }
    }

    return ( 

        
        <Fragment>
            <Navbar></Navbar>
            <Router onChange={handleRouteChange}>
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