import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ad from './../About.module.css'
import { Route,  Link,  useRouteMatch, Switch } from 'react-router-dom';
import { ProfileType, BriefType } from '../../../types/State_Profile_Reduce';
import { AboutOverview } from './AboutOverview';
import { AboutWorkAndEducation } from './AboutWorkAndEducation';
import { Buttons } from './buttons/Buttons';
type AboutDetailType = {
    aboutDetail: ProfileType
    brief: BriefType
    putProfileData: (values:ProfileType) => void
    isMyPage: boolean | null
}

export const AboutDetail: React.FC<AboutDetailType> = ({ brief, aboutDetail,  isMyPage, putProfileData }: AboutDetailType) => {
    let {path, url} = useRouteMatch();
    return (
        <div className={ad.wrapper_information}>
            <div className={ad.information_nav}>
                <h1>Полная информация</h1>                         
                    <div className={ad.buttons_link}>
                        <Link to={ `about_overview`} > 
                                <Buttons props={'Общие свединия'}/>
                        </Link>
                    </div>
                    <div className={ad.buttons_link}>
                        <Link to={`${url}/about_work_and_education`} > 
                        <Buttons props={ 'Работа'}/> </Link>
                    </div>
            </div>
            <div className={ad.information_state}> 
            <Switch>    
                <Route exact path={`${path}`} render={() => <AboutOverview brief={brief} />} />            
                <Route path={`${path}/about_overview` }  render={() => <AboutOverview brief={brief} />} />                     
                <Route path={`${path}/about_work_and_education`}  render={() =>  <AboutWorkAndEducation  putProfileData={putProfileData}  aboutDetail={aboutDetail}  isMyPage={isMyPage}/> }  />                     
            </Switch>
            </div>
        </div>
    )
}
// activeStyle={{color: 'var(--accent)'}}

