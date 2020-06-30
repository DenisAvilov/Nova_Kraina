import * as React from 'react'
import about from './../About.module.css'
import d from './../../profile/userState/UserState.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileType, ContactsType } from '../../../types/State_Profile_Reduce'
import { AboutWorkFormUser } from './AboutWorkForm'
import { render } from '@testing-library/react'
import { ProfileData } from './ProfileData'

export type AboutWorkAndEducationType ={
    aboutDetail: ProfileType
    putProfileData: (values:ProfileType) => void
    isMyPage: boolean | null 
   
}

export const AboutWorkAndEducation: React.FC<AboutWorkAndEducationType> = ({ isMyPage,   aboutDetail, putProfileData}:AboutWorkAndEducationType) => {

        let [changeMode , SetChangeMode] = React.useState(false) 

       const  onSubmit = (values:ProfileType) => {
            putProfileData(values)
            SetChangeMode(false)
        }

     return <> 
     <h1 className={about.h2}>Работа </h1> 
     
       {changeMode 
        ? <AboutWorkFormUser  initialValues={aboutDetail}    onSubmit={onSubmit} /> 
        : <ProfileData changeMode={() => SetChangeMode(true)}  aboutDetail={aboutDetail}  isMyPage={isMyPage} /> 
        }
 
 </>} 
 
 type ContactType = {
    contactKey: string
    contactValue: string | null
 }
 export const Contact: React.FC<ContactType> = ( {contactKey, contactValue}:ContactType ) => {

        return <div>  {contactKey} ' ' {contactValue} </div>
     
 }
