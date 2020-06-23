import React from 'react';
import d from './Login.module.css';
import { Redirect } from 'react-router-dom';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { required, email, minValue5 } from '../renderField/validationForm';
import { renderField } from '../renderField/renderField';
import { сreateNewForm } from '../renderField/CreateNewForm';
import { LoginFormValuesType } from './LoginContainer';
const input = renderField("Input");
// InjectedFormProps - импорт формы из редакса 
type MeProps = {
    captcha: string | null
}
// React.FC<InjectedFormProps /*указываем типмзацию в пропсах из библиотеки redux-form */ и добовляем свои свойства  <LoginFormValuesType, MeProps  > & MeProps /*указываем пропсы для себя*/) >
const FieldLoginForm: React.FC<InjectedFormProps<LoginFormValuesType, MeProps> & MeProps> = ({ handleSubmit, error, captcha }) => {
    //CreateNewForm - createField
    return (
        <form onSubmit={handleSubmit} className={d.wrapForm + " " + (error ? d.errors : " ")}>
            {сreateNewForm(input, [required, email], "email", "email", "Email",)}
            {сreateNewForm(input, [required, minValue5], "password", "password", "Password",)}
            <div className={d.wrapChekbox}>
                {сreateNewForm(input, [], "remember_my", "checkbox", "Остаться в системе",)}
            </div>
            <div className={d.errorss}>
                {error ?? error}
            </div>
            <img src={captcha ? captcha : undefined} />
            {captcha ? сreateNewForm(input, [required, minValue5], "captcha", "captcha", "Введите код с картинки",) : undefined}
            <button type="submit">Войти</button>
        </form>
    )
}
//Нужно описать какую компоненту собираюсь настоить. reduxForm инжектит с помощью пропсов handleSubmit и error  
// Типизтруем  reduxForm - джинериковій
let LoginForm = reduxForm<LoginFormValuesType, MeProps>({ form: 'loginField' })(FieldLoginForm)
//   export default FieldLoginForm
type LoginType = { isYou: boolean | null, onSubmit: any, captcha: string | null }
//Login  - это наша компонента 
const Login: React.FC<LoginType> = ({ isYou, onSubmit, captcha }: LoginType) => {
    if (isYou) return <Redirect to={"/profile"}></Redirect>
    return (<div className={d.wrap}>
        <h1>Авторизируйтесь</h1>
        < LoginForm onSubmit={onSubmit} captcha={captcha} />
    </div>
    )
}

export default Login;

