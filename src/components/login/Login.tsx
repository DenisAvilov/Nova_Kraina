import React from 'react';
import d from './Login.module.css';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { required, email, minValue5, minValueSim5 } from '../renderField/validationForm';
import { yourField } from '../renderField/renderField';
import { type } from 'os';
import { GeneralType } from '../../types/State_General_Reduce';

let input = yourField("input");

type FieldLoginFormType = {
    handleSubmit: any
    error: string
    
}

const FieldLoginForm: React.FC<FieldLoginFormType> = (props: FieldLoginFormType) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className={d.wrapForm + " " + (props.error ? d.errors : " ")}>
            <div className={d.wrapField}>
                <Field component={input} validate={[required, email]} name="email" type="email" label="Email"></Field>
            </div>
            <div className={d.wrapField}>
                <Field component={input} validate={[required, minValue5, minValueSim5]} name="password" type="password" label="Password"></Field>
            </div>
            <div className={d.wrapChekbox}>
                <Field component={input} name="remember_my" type="checkbox" label="Remember my"></Field>
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

