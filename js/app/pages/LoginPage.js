import { h, Fragment, Component } from 'preact'
import { useState } from 'preact/hooks'
import { Form, Input, Button } from 'antd'
//import './prueba';

const RegisterForm = (props) => {

    return (

        <form id="log" class="email-login">
            <div class="form-group">
                <label for="username">UserName</label>
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
                <label for="passConf">Confirm Password</label>
                <input type="password" class="form-control" id="passConf"></input>
            </div>
            
            <div class="text-center" style="margin-top: 30px;">
                <button type="submit" id="boton" class="btn btn-primary">Create</button>
        
                </div>
                
        </form>

    )



}



const LoginForm =  (props) => {

    const [form] = Form.useForm()

    const handleSubmit = () => {
        const loginForm = form.getFieldsValue()
        console.log(loginForm)

        fetch('https://pwa-postgre.herokuapp.com/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginForm)
        }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
        

    }


    return (


        <Form 
            form={form}
            onFinish={handleSubmit}

        id="log" class="email-login">
            <Form.Item class="form-group"
                label="Username"
                name="username"
            >
                <Input type="text" class="form-control" id="username" aria-describedby="emailHelp"></Input>
            </Form.Item>
            <Form.Item class="form-group"
                label="Password"
                name="password"
            >
                <Input.Password class="form-control" id="pass"></Input.Password>
            </Form.Item>
            <Form.Item class="text-center" >
                <Button htmlType="submit" class="btn btn-primary" id="boton">Login</Button></Form.Item>
        </Form>

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
                    <a onClick={goToLogin} href="#" class="active" id="login-box-link">Log in</a>
                    <a onClick={goToRegister} href="#"  class="active"  id="signup-box-link">Register</a>
                </div>

                {transitionRL ? <LoginForm /> : <RegisterForm/>}

            </div>
        </Fragment>
    )
}



export default LoginPage