import * as React from 'react';
import d from './UserState.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type } from 'os';
import { BriefType } from '../../../types/State_Profile_Reduce';

type UserStateType = {
    brief: BriefType
}

const UserState: React.FC<UserStateType> = (props: UserStateType) => {
     let {brief} = props
    return (
        <div className={d.state}>
            <h1>{brief.shortTitle}</h1>
            <ul>
                <li className={d.state_item}>
                    <div>
                        <FontAwesomeIcon icon='graduation-cap' />
                    </div>
                <div className={d.state_inform}><span>Учился в </span><a href="#">{brief.placeStudy}</a></div>
                </li>
                <li className={d.state_item}>
                    <div>
                        <FontAwesomeIcon icon='home' />
                    </div>
    <div className={d.state_inform}><span>Живет в г. </span><a href="#">{brief.misto}</a></div>
                </li>
                <li className={d.state_item}>
                    <div className={d.map}>
                        <FontAwesomeIcon icon='map-marker' />
                    </div>
    <div className={d.state_inform}><span>Из </span><a href="#">{brief.krayina}</a></div>
                </li>
            </ul>
        </div>
    )
}

export default UserState;