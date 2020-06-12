import * as React from 'react'
import { AboutDetail } from './AboutDetail'
import { ProfileType } from '../../types/State_Profile_Reduce'

type AboutType = { 
    aboutDetail: ProfileType
  
}
export const About: React.FC<AboutType> = (props: AboutType) => { 
   let {aboutDetail} = props
    return (<>    
           <AboutDetail aboutDetail={aboutDetail}/>     
           <AboutDetail aboutDetail={aboutDetail}/>     
           <AboutDetail aboutDetail={aboutDetail}/>     
           </> 
    )
}