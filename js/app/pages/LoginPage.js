import { h, Fragment, Component } from 'preact'
import { useState } from 'preact/hooks'
import { Form, Input, Button } from 'antd'


const API_ROUTE = 'https://pwa-postgre.herokuapp.com'

const RegisterForm = (props) => {
    const [form] = Form.useForm()

    const handleRegister = values => {
    
        console.log('Submit')
        console.log(values)
    }

    console.log('Form', form)
    return (

        <Form form={form} 
        id="log" 
        class="email-login"
        onFinish={handleRegister}
        scrollToFirstError
        >
            <Form.Item //class="form-group"
                label="Username"
                name="username"
            >
                <Input type="text" class="form-control" id="username" aria-describedby="emailHelp"></Input>
            </Form.Item>
            <Form.Item //class="form-group"
                label="E-mail"
                name="mail"
            >
                <Input type="email" class="form-control" id="mail"></Input>
            </Form.Item>
            <Form.Item //class="form-group"
                label="Password"
                name="password"
            >
                <Input.Password type="password" class="form-control" id="pass"></Input.Password>
            </Form.Item>
            <Form.Item //class="form-group"
                label="Confirm Password"
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        console.log("Validating")
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject('The two passwords that you entered do not match!');
                      },
                    }),
                  ]}
            >
                <Input.Password type="password" class="form-control" id="passConf"></Input.Password>
            </Form.Item>

            <Form.Item class="text-center" >
                <Button htmlType="submit" id="boton" class="btn btn-primary">Create</Button>

            </Form.Item>

        </Form>

    )



}



const LoginForm = (props) => {

    const [form] = Form.useForm()

    const handleSubmit = () => {
        const loginForm = form.getFieldsValue()
        console.log(loginForm)

        fetch(`${API_ROUTE}/login`, {
            method: 'POST',
            headers: {
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
                    <a onClick={goToRegister} href="#" class="active" id="signup-box-link">Register</a>
                </div>

                {transitionRL ? <LoginForm /> : <RegisterForm />}

            </div>
        </Fragment>
    )
}



export default LoginPage