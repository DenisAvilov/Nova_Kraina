import * as React from 'react'
import about from './../About.module.css'
import d from './../../profile/userState/UserState.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileType, ContactsType } from '../../../types/State_Profile_Reduce'
import { Field, reduxForm, InjectedFormProps  } from 'redux-form'
import { сreateNewForm } from '../../renderField/CreateNewForm'
import { renderField } from '../../renderField/renderField'

let Input = renderField("input")
type AboutWorkFormProps ={
       
        initialValues: ProfileType
    }

 const AboutWorkForm: React.FC<InjectedFormProps<ProfileType, AboutWorkFormProps> & AboutWorkFormProps>  = (
      { handleSubmit }) => {
   
    return <React.Fragment> 

      <form onSubmit={handleSubmit}  >    
        <ul>       
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='graduation-cap' /> <span>Полное Имя: </span> </div>
                <div className={d.state_inform}>
                {сreateNewForm( Input, [],"fullName", "text", undefined)}
                 </div>
            </li>
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='home' /> <span>Обо мне: </span></div>
                <div className={d.state_inform}>
                {сreateNewForm( Input, [], "aboutMe", "text", undefined)}
              </div>
            </li> 
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='graduation-cap' /><span>Вы в поиске работы: </span> </div>
                <div className={d.state_inform}>
                {сreateNewForm( Input, [],"lookingForAJob", "checkbox", undefined)}
                 </div>
            </li>
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='home' /> <span>Что вы ищите: </span></div>
                <div className={d.state_inform}>
                {сreateNewForm( Input, [],"lookingForAJobDescription", "text", undefined)}
               </div>
            </li>   
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='home' /> <span>Социальные сети: </span></div>
                <div className={d.state_inform}>
                {сreateNewForm( Input, [],"GitHub", "text", undefined)}
               </div>
            </li>  
                 
        </ul>
        <button type={'submit'}>Sent</button>
        
        </form> 
 </React.Fragment>}   


export  const AboutWorkFormUser = reduxForm<ProfileType,  AboutWorkFormProps >({ form: 'UserAboutWork' })(AboutWorkForm)

