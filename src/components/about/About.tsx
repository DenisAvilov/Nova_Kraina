import * as React from 'react'
import { AboutDetail } from  './aboutDetail/AboutDetail'
import { ProfileType, BriefType } from '../../types/State_Profile_Reduce'

type AboutType = { 
    aboutDetail: ProfileType
    brief: BriefType
    isMyPage: boolean | null
    putProfileData: (values:ProfileType) => void
}
export const About: React.FC<AboutType> = ( {aboutDetail, brief,  isMyPage, putProfileData }: AboutType) => { 
     
   
  
    return (   <React.Fragment>  
                  <AboutDetail aboutDetail={aboutDetail} brief={brief}  isMyPage={isMyPage}  putProfileData={putProfileData}/>                 
             </React.Fragment>
            )
}