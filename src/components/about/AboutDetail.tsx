import * as React from 'react'
import { ProfileType } from '../../types/State_Profile_Reduce'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import d from '../profile/userState/UserState.module.css';
import ad from './About.module.css'
import { NavLink, Route, Router, Switch } from 'react-router-dom';
import { AboutWorkAndEducation } from './About_work_and_education';
import { emailUser } from '../../redux/selector-redux';
import { AboutNavLink } from './AboutNavLink';
type AboutDetailType = {
    aboutDetail: ProfileType
}

export const AboutDetail: React.FC<AboutDetailType> = ({ aboutDetail }: AboutDetailType) => {

    return (
        <div className={ad.wrapper_information}>
            <div className={ad.information_nav}>
                <h1>Полная информация</h1>
                <AboutNavLink />
            </div>
            <div className={ad.information_state}> 
                    <Switch>
                        <Route exact path={'/'} render={()=> ( <h1>WELCOM</h1> ) }  activeStyle={{color: "blue"}} />                  
                        <Route  path={'/about'} render={()=> ( <h1>TELECOM</h1> ) }  activeStyle={{color: "blue"}} />
                     </Switch>          
             
                      {/* _works_and_education */}

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