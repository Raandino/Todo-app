import { h, Fragment, Component } from 'preact'
import { useState } from 'preact/hooks'
//import './prueba';

const RegisterForm = (props) => {

    return (

        <form id="log" class="email-login">
            <div class="form-group">
                <label for="username">User Name</label>
                <input type="text" class="form-control" id="username" aria-describedby="emailHelp"></input>
            </div>
            <div class="form-group">
                <label for="mail">Email</label>
                <input type="email" class="form-control" id="mail"></input>
            </div>
            <div class="form-group">
                <label for="pass">Password</label>
                <input type="password" class="form-control" id="pass"></input>
            </div>
            <div class="form-group">
                <label for="passConf">Confirmar Password</label>
                <input type="password" class="form-control" id="passConf"></input>
            </div>
            
            <div class="text-center" style="margin-top: 30px;">
                <button type="submit" id="boton" class="btn btn-primary">Sign Up</button>
        
                </div>
                
        </form>

    )



}



const LoginForm = (props) => {

    return (


        <form id="log" class="email-login">
            <div class="form-group">
                <label for="username">User Name</label>
                <input type="email" class="form-control" id="username" aria-describedby="emailHelp"></input>
            </div>
            <div class="form-group">
                <label for="pass">Password</label>
                <input type="password" class="form-control" id="pass"></input>
            </div>
            <div class="text-center" style="margin-top: 30px;">
                <button type="submit" class="btn btn-primary" id="boton">Login</button></div>
        </form>

    )


}

const LoginPage = (props) => {

    const [transitionRL, setTransitionRL] = useState(true)

    const goToRegister = e => {
        setTransitionRL(false)
    }
    const goToLogin = e => {
        setTransitionRL(true)
    }

    return (
        <Fragment>
            <h3 class="display-4 text-center mt-5" id="cuenta">Cuenta</h3>
            <div id="login" class="mx-auto">
                <div id="header" class="card-header">
                    <a onClick={goToLogin} href="#" class="active" id="login-box-link">Login</a>
                    <a onClick={goToRegister} href="#"  class="active"  id="signup-box-link">Register</a>
                </div>

                {transitionRL ? <LoginForm /> : <RegisterForm/>}

            </div>
        </Fragment>
    )
}



export default LoginPage