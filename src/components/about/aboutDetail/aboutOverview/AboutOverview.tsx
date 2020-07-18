import * as React from 'react'
import d from './../../../profile/userState/UserState.module.css'
import about from './../../About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BriefType } from '../../../../types/State_Profile_Reduce'
import { AboutOverviewForm } from './AboutOverviewForm'


type AboutOverviewTypeProps = {
    brief: BriefType
}

export type SubmitOverviewType = { misto: string, krayina: string, placeStudy: string}
//получить ключи типа стринг, от типа SubmitOverviewType
export type SubmitOverviewKeys = Extract< keyof SubmitOverviewType, string> 

type AboutOverviewTypeLocalStorage ={storyForMyLife: string}
export type SubmitLocalStorageKeys = Extract< keyof AboutOverviewTypeLocalStorage, string> 

export const AboutOverview: React.FC<AboutOverviewTypeProps>  = ({ brief }: AboutOverviewTypeProps) => { 

  let [stateButtom , setStateButtom] = React.useState(true)
   const submit = (values: SubmitOverviewType) => {  
    console.log(values)
  }

  return <React.Fragment> <h2 className={about.h2}>Общие свединия</h2> 
        {stateButtom 
        ? <AboutOverviewBody brief={brief}  stateButtom={ () => setStateButtom(false)}/> 
        : <AboutOverviewForm onSubmit={ submit} initialValues={brief}   stateButtom={ () => setStateButtom(true)}/>}        
        </React.Fragment>
}   



type AboutOverviewBodyType = {
    brief: BriefType
    stateButtom: ()=> void
}
export const AboutOverviewBody:React.FC<AboutOverviewBodyType> =( { stateButtom, brief: { misto, krayina, placeStudy } }:AboutOverviewBodyType ) =>{ 
return <React.Fragment>  <ul>
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='graduation-cap' /> </div>
                <div className={d.state_inform}><span>Учился в </span>{' ' + placeStudy}</div>
            </li>
            <li className={d.state_item}>
                <div> <FontAwesomeIcon icon='home' /> </div>
                <div className={d.state_inform}><span>Живет в г. </span>{" " + misto}</div>
            </li>
            <li className={d.state_item}>
                <div className={d.map}> <FontAwesomeIcon icon='map-marker' /> </div>
                <div className={d.state_inform}><span>Из </span>{" " + krayina}</div>
            </li>
        </ul> 
        <button onClick={stateButtom}>Редактировать</button>
    </React.Fragment>
}  