import * as React from 'react'
import about from './../About.module.css'
import d from './../../profile/userState/UserState.module.css'
import sass from './AboutWorkForm.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileType, ContactsType } from '../../../types/State_Profile_Reduce'
import { Field, reduxForm, InjectedFormProps  } from 'redux-form'
import { сreateNewForm } from '../../common/CreateNewForm'
import { renderField } from '../../common/renderField'

let Input = renderField("input"), Textarea = renderField('textarea');

type AboutWorkFormProps ={
        aboutDetail: ProfileType
        initialValues: ProfileType
    }

 const AboutWorkForm: React.FC<InjectedFormProps<ProfileType, AboutWorkFormProps> & AboutWorkFormProps>  = (
      { handleSubmit, aboutDetail }) => {
   
    return <React.Fragment> 

      <form onSubmit={handleSubmit} className={sass.contactFormWrapper}>    
        <ul  >       
            <li className={sass.contactFormItem}>
                <div className={sass.contactFormLable}> <FontAwesomeIcon icon='graduation-cap' /> <span>Полное Имя: </span> </div>
                <div className={d.state_inform}>
                {сreateNewForm( Input, [],"fullName", "text", undefined)}
                 </div>
            </li>
            <li className={sass.contactFormItem}>
                <div className={sass.contactFormLable}> <FontAwesomeIcon icon='home' /> <span>Обо мне: </span></div>
                <div className={d.state_inform}>
                {сreateNewForm( Textarea, [], "aboutMe", "textarea", undefined)}
              </div>
            </li> 
            <li className={sass.contactFormItem}>
                <div className={sass.contactFormLable}> <FontAwesomeIcon icon='graduation-cap' /><span>Вы в поиске работы: </span> </div>
                <div className={d.state_inform}>
                {сreateNewForm( Input, [],"lookingForAJob", "checkbox", undefined)}
                 </div>
            </li>
            <li className={sass.contactFormItem}>
                <div className={sass.contactFormLable}> <FontAwesomeIcon icon='home' /> <span>Что вы ищите: </span></div>
                <div className={d.state_inform}>
                {сreateNewForm( Textarea, [],"lookingForAJobDescription", "textarea", undefined)}
               </div>
            </li>   
            <li className={sass.contactFormItem}>
                <div className={sass.contactFormLable}> <FontAwesomeIcon icon='home' /> <span>Социальные сети: </span></div>

                <div className={d.state_inform}>
                  { (Object.keys(aboutDetail.contacts) as Array<keyof typeof aboutDetail.contacts>) .map((key) => 
                  <div key={key} className={sass.contactsForm}> 
                    <div className={sass.contactsFormLable}> { key+":" } </div> 
                    { сreateNewForm( Input, [], "contacts." + key, "text", undefined)} 
               </div>   

  ) }   </div>
            </li>  
                 
        </ul>
        <button type={'submit'}>Сохранить</button>
        
        </form> 
 </React.Fragment>}   


export  const AboutWorkFormUser = reduxForm<ProfileType,  AboutWorkFormProps >({ form: 'UserAboutWork' })(AboutWorkForm)

