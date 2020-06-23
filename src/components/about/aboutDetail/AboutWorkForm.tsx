import * as React from 'react'
import about from './../About.module.css'
import d from './../../profile/userState/UserState.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileType } from '../../../types/State_Profile_Reduce'
import { Field, reduxForm, InjectedFormProps  } from 'redux-form'

type AboutWorkFormProps ={
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string 
        aboutMe: string    
}

 const AboutWorkForm: React.FC<InjectedFormProps<ProfileType, AboutWorkFormProps> & AboutWorkFormProps>  = ( {aboutMe, lookingForAJob, lookingForAJobDescription, fullName, handleSubmit }) => {
    
    return <React.Fragment> 

      <form onSubmit={handleSubmit}>    
        <ul>       
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='graduation-cap' /> </div>
                <div className={d.state_inform}><span>Имя: </span> <Field component={'input'} name={'fullName'} type="text" placeholder={fullName} /> </div>
            </li>
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='home' /> </div>
                <div className={d.state_inform}><span>AboutMe: </span> <Field component={'input'} name={'AboutMe'} type="text" placeholder={aboutMe}/> </div>
            </li> 
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='graduation-cap' /> </div>
                <div className={d.state_inform}><span>Вы в поиске работы: </span> <Field component={'input'} name={'lookingForAJob'} type="checkbox" /> </div>
            </li>
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='home' /> </div>
                <div className={d.state_inform}><span>Что вы ищите: </span> <Field component={'input'} name={'lookingForAJobDescription'} type="text" placeholder={lookingForAJobDescription}/> </div>
            </li>   
            
                 
        </ul>
        <button type={'submit'}>Sent</button>
        </form> 
 </React.Fragment>}   


export  const AboutWorkFormUser = reduxForm<ProfileType,  AboutWorkFormProps >({ form: 'UserAboutWork' })(AboutWorkForm)

