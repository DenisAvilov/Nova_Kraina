import * as React from 'react'
import d from './../../profile/userState/UserState.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactsType, ProfileType } from '../../../types/State_Profile_Reduce'
import { Contact } from './AboutWorkAndEducation'




type  ProfileDataType = {    
    aboutDetail: ProfileType
    isMyPage: boolean | null
    changeMode: ( ) => void 
}
export const ProfileData: React.FC<ProfileDataType> = ({changeMode , isMyPage,  aboutDetail}: ProfileDataType)=>{
 return <div> { isMyPage &&  <button onClick={changeMode}> Click </button> }  
 <ul>       
 <li className={d.state_item}>
     <div> <FontAwesomeIcon icon='graduation-cap' /> </div>
     <div className={d.state_inform}><span>Имя: </span>{aboutDetail.fullName? ' ' + aboutDetail.fullName : ' Нет имени'}</div>
 </li>
 <li className={d.state_item}>
     <div> <FontAwesomeIcon icon='graduation-cap' /> </div>
     <div className={d.state_inform}><span>О бо мне: </span>{ aboutDetail.aboutMe ? ' ' + aboutDetail.aboutMe : ' Нет описания'}</div>
 </li>
 <li className={d.state_item}>
     <div> <FontAwesomeIcon icon='graduation-cap' /> </div>
     <div className={d.state_inform}><span>Вы в поиске работы: </span>{aboutDetail.lookingForAJob ? " В активном поиске " : " Нет "}</div>
 </li>
 <li className={d.state_item}>
     <div> <FontAwesomeIcon icon='home' /> </div>
     <div className={d.state_inform}><span>Что вы ищите: </span>{ aboutDetail.lookingForAJobDescription ? ' ' + aboutDetail.lookingForAJobDescription : " Нет описания " }</div>
 </li>  
  <li className={d.state_item}>
     <div> <FontAwesomeIcon icon='home' /> </div>
     <div className={d.state_inform}><span>Контакты: </span>     
             
     {/* { (Object.keys(aboutDetail.contacts) as Array<keyof typeof aboutDetail.contacts>) .map((key) => 

        { return <Contact key={key} contactKey={key} contactValue={aboutDetail.contacts[key]}/> }
         
         ) }   */}
     
         </div>
 </li>         
</ul>
</div>
}