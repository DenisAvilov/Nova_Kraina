import * as React from 'react'

import d from './../../profile/userState/UserState.module.css'
import about from './../About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BriefType } from '../../../types/State_Profile_Reduce'
type AboutOverviewTypeProps = {
    brief: BriefType
 
}
type OwnState = {
    value: number | string[] | undefined
}

export const AboutOverview: React.FC<AboutOverviewTypeProps> = ({ brief: { misto, krayina, placeStudy } }: AboutOverviewTypeProps) => {

    return <React.Fragment> <h2 className={about.h2}>Общие свединия</h2>
        <ul>
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
        </ul> </React.Fragment>
}   
