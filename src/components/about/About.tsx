import * as React from 'react'
import { AboutDetail } from  './aboutDetail/AboutDetail'
import { ProfileType, BriefType } from '../../types/State_Profile_Reduce'

type AboutType = { 
    aboutDetail: ProfileType
    brief: BriefType
    
    onSubmit: any
}
export const About: React.FC<AboutType> = ( {aboutDetail, brief, onSubmit}: AboutType) => { 
  
    return (   <React.Fragment>  
                  <AboutDetail aboutDetail={aboutDetail} brief={brief}  onSubmit={onSubmit}/>                 
             </React.Fragment>
            )
}