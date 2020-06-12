import React from 'react';
import d from './Login.module.css';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { required, email, minValue5 } from '../renderField/validationForm';
import { YourField } from '../renderField/renderField';
import { CreatNuwForm } from '../renderField/form-helper.js';
import { LoginFormValuesType } from './LoginContainer';

let input = YourField("input");
// InjectedFormProps - импорт формы из редакса 

type MeProps = {
    captcha: string | null
}
// React.FC<InjectedFormProps<LoginFormValuesType, MeProps /*указываем пропсы для библиотеки redux-form*/ > & MeProps /*указываем пропсы для себя*/) >
const FieldLoginForm: React.FC<InjectedFormProps<LoginFormValuesType, MeProps > & MeProps >= ( {handleSubmit, error,   captcha}) => {
  

    return (
        <form onSubmit={handleSubmit} className={d.wrapForm + " " + (error ? d.errors : " ")}>         
               { CreatNuwForm( input , [required, email], "email", "email", "Email" )}
               { CreatNuwForm( input , [required, minValue5], "password", "password", "Password" )}             
            <div className={d.wrapChekbox}>
               { CreatNuwForm( input , [], "remember_my", "checkbox", "Остаться в системе" )} 
            </div>
            <div className={d.errorss}>
                {error ?? error}                
            </div>
            <img src={captcha ? captcha : undefined}/>
            {captcha?  CreatNuwForm( input , [required, minValue5], "captcha", "captcha", "Введите код с картинки" ) : undefined }
            

            <button type="submit">Войти</button>
        </form>
    )

}

//Нужно описать какую компоненту собираюсь настоить 
let LoginForm = reduxForm<LoginFormValuesType, MeProps>({  form: 'loginField' })(FieldLoginForm)

//   export default FieldLoginForm


type LoginType = {
    isYou: boolean | null
    onSubmit: any
    captcha: string | null
}


const Login: React.FC<LoginType> = ({isYou,onSubmit,captcha}: LoginType) => {    
    if (isYou) return <Redirect to={"/profile"}></Redirect>
    return (<div className={d.wrap}>
        <h1>Авторизируйтесь</h1>
        < LoginForm onSubmit={onSubmit} captcha={captcha}/>
    </div>
    )
}

export default Login;

