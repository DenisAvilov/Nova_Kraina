import React from 'react';
import d from './Login.module.css';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';



const FieldLoginForm = props => {
  const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>           
            <div>
                <label htmlFor="Field">Email</label>
                <Field component="input" name="email" type="email" placeholder="email"></Field>
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <Field component="input" name="password" type="password" placeholder="Password"></Field>
            </div>
            <div>
                <label htmlFor="RememberMy">Remember my</label>
                <Field component="input" name="remember_my"  type="checkbox" placeholder="Remember my"></Field>
            </div>
            <button type="submit">Push</button>
        </form>
    )
} 


let LoginForm = reduxForm({   
    form: 'loginField'
  })(FieldLoginForm)
  
//   export default FieldLoginForm



const Login = (props) => {
     if(props.redireckInProfile) return <Redirect to={"/profile"}></Redirect>
    return (<div>
         <h1 className={d.wrap}>Авторизируйтесь</h1>    
        < LoginForm onSubmit={props.onSubmit}/> 
        </div>
    )
}

export default Login;

