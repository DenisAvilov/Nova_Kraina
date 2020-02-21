import React from 'react';
import d from './UserState.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserState = () => {
    return (
        <div className={d.state}>
            <h1>Краткая информация</h1>
            <ul>
                <li className={d.state_item}>
                    <div>
                        <FontAwesomeIcon icon='graduation-cap' />
                    </div>
                    <div className={d.state_inform}><span>Учился в </span><a href="#">National Aerospace University – Kharkov Aviation Institute</a></div>
                </li>
                <li className={d.state_item}>
                    <div>
                        <FontAwesomeIcon icon='home' />
                    </div>
                    <div className={d.state_inform}><span>Живет в г.</span><a href="#">Харьков</a></div>
                </li>
                <li className={d.state_item}>
                    <div className={d.map}>
                        <FontAwesomeIcon icon='map-marker' />
                    </div>
                    <div className={d.state_inform}><span>Из </span><a href="#">Харьков</a></div>
                </li>
            </ul>
        </div>
    )
}

export default UserState;