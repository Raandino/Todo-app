//import 'preact/debug'
import 'preact/devtools'
import {h , render } from 'preact'
import {useState} from 'preact/hooks'
import App from './app/App'
import 'antd/dist/antd.css'
import '../css/index.css';
import UserContext from './app/context/UserContext'

const root = document.getElementById('app')

const MainApp = ()=> {
    const [user, setUser] = useState()
    const logInUser = user => {
        setUser(user)
    }

    const logOutUser = x => {
        setUser()
    }
    return (
     <UserContext.Provider
     value={
        {
            user : user,
            logInUser: logInUser,
            logOutUser: logOutUser
        }
     }
     >
         <App/>
     </UserContext.Provider>
       )
}
render(<MainApp></MainApp>,root)

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then( reg => {
            console.log('Registrated')
        })
} 