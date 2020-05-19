import React from 'react';
import d from './Login.module.css';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { required, email, minValue5, minValueSim5 } from '../renderField/validationForm';
import { yourField } from '../renderField/renderField';
import { CreatNuwForm } from '../renderField/form-helper';

let input = yourField("input");

type FieldLoginFormType = {
    handleSubmit: any
    error: string    
}

const FieldLoginForm: React.FC<FieldLoginFormType> = (props: FieldLoginFormType) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className={d.wrapForm + " " + (props.error ? d.errors : " ")}>         
               { CreatNuwForm( input , [required, email], "email", "email", "Email" )}
               { CreatNuwForm( input , [required, minValue5, minValueSim5], "password", "password", "Password" )}             
            <div className={d.wrapChekbox}>
               { CreatNuwForm( input , [], "remember_my", "checkbox", "Остаться в системе" )} 
            </div>
            <div className={d.errorss}>
                {props.error ?? props.error}
            </div>
            <button type="submit">Войти</button>
        </form>
    )

}


let LoginForm = reduxForm({
    form: 'loginField'
})(FieldLoginForm)

//   export default FieldLoginForm


type LoginType = {
    isYou: boolean | null
    onSubmit: any
}


const Login: React.FC<LoginType> = (props: LoginType) => {
    if (props.isYou) return <Redirect to={"/profile"}></Redirect>
    return (<div className={d.wrap}>
        <h1>Авторизируйтесь</h1>
        < LoginForm onSubmit={props.onSubmit} />
    </div>
    )
}

export default Login;

