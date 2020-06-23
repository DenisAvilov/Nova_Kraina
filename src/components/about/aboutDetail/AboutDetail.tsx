import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ad from './../About.module.css'
import { Route,  Link, NavLink } from 'react-router-dom';
import { ProfileType, BriefType } from '../../../types/State_Profile_Reduce';
import { AboutOverview } from './AboutOverview';
import { AboutWorkAndEducation } from './AboutWorkAndEducation';
import { Buttons } from './buttons/Buttons';
type AboutDetailType = {
    aboutDetail: ProfileType
    brief: BriefType

    onSubmit: any
}

export const AboutDetail: React.FC<AboutDetailType> = ({ brief, aboutDetail, onSubmit }: AboutDetailType) => {

    return (
        <div className={ad.wrapper_information}>
            <div className={ad.information_nav}>
                <h1>Полная информация</h1>                         
            <div className={ad.buttons_link}><NavLink to={ '/profile/about_overview'} activeStyle={{color: 'var(--accent)'}}> 
                        <Buttons props={'Общие свединия'}/> </NavLink></div>
               <div className={ad.buttons_link}>
                   <NavLink to={'/profile/about_work_and_education'} activeStyle={{ color: 'var(--accent)'}} > 
                   <Buttons props={ 'Работа'}/> </NavLink></div>
            </div>
            <div className={ad.information_state}>    
            <Route path={ '/profile/about' }  render={() => <AboutOverview  brief={brief}/>} />            
            <Route path={ '/profile/about_overview' }  render={() => <AboutOverview brief={brief}/>} />                     
            <Route path={'/profile/about_work_and_education'}  render={() =>  <AboutWorkAndEducation   aboutDetail={aboutDetail} onSubmit={onSubmit}/> }  />                     
                    
            </div>
        </div>
    )
}


{/* <ul>
<li className={d.state_item}>
    <div>
        <FontAwesomeIcon icon='graduation-cap' />
    </div>
<div className={d.state_inform}><span>Учился в </span><a href="#">Полное Имя {aboutDetail.fullName} </a></div>
</li>
           <li className={d.state_item}>
                <div>
                    <FontAwesomeIcon icon='home' />
                </div>
    <div className={d.state_inform}><span>Живет в г. </span><a href="#">здесь В поиске работы {aboutDetail.lookingForAJob}</a></div>
            </li>
            <li className={d.state_item}>
                    <div className={d.map}>
                        <FontAwesomeIcon icon='map-marker' />
                    </div>
<div className={d.state_inform}><span>Из </span><a href="#">от туда</a></div>
        </li>
</ul> */}