import * as React from 'react'
import about from './../About.module.css'
import d from './../../profile/userState/UserState.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileType } from '../../../types/State_Profile_Reduce'
import { AboutWorkFormUser } from './AboutWorkForm'

export type AboutWorkAndEducationType ={
    aboutDetail: ProfileType
    onSubmit: any
}
export const AboutWorkAndEducation: React.FC<AboutWorkAndEducationType> = ({aboutDetail:{lookingForAJob, lookingForAJobDescription, fullName, aboutMe}, onSubmit 
      }:AboutWorkAndEducationType) => {

        let [changeDataUserState, SetChangeDataUserState] = React.useState(false)   

        const changeDataUser = () =>{
            SetChangeDataUserState(!changeDataUserState)
        }
     
   

     return <> 
     <h1 className={about.h2}>Работа </h1> 
     
       {changeDataUserState ? <AboutWorkFormUser
       lookingForAJob={lookingForAJob} lookingForAJobDescription={lookingForAJobDescription}
        aboutMe={aboutMe} fullName={fullName}   onSubmit={onSubmit}/> :
        <ul>       
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='graduation-cap' /> </div>
                <div className={d.state_inform}><span>Имя: </span>{fullName? ' ' + fullName : ' Нет имени'}</div>
            </li>
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='graduation-cap' /> </div>
                <div className={d.state_inform}><span>О бо мне: </span>{ aboutMe ? ' ' + aboutMe : ' Нет описания'}</div>
            </li>
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='graduation-cap' /> </div>
                <div className={d.state_inform}><span>Вы в поиске работы: </span>{lookingForAJob ? " В активном поиске " : " Нет "}</div>
            </li>
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='home' /> </div>
                <div className={d.state_inform}><span>Что вы ищите: </span>{ lookingForAJobDescription ? ' ' + lookingForAJobDescription : " Нет описания " }</div>
            </li>          
        </ul>
        }
    <button onClick={ () => changeDataUser()}> { changeDataUserState ? 'Отменить' : 'Изменить'}  </button>
 </>} 
 
 