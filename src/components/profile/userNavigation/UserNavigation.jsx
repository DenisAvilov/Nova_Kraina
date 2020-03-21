import React from 'react';
import d from './UserNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';

const UserNavigation = () => {
    return (
        <div className={d.nav}>
            <div className={d.nav_info}>
                <NavLink to="/">Хроника</NavLink>
                <NavLink to="/">Информация</NavLink>
                <NavLink to="/">Друзья</NavLink>  
                <NavLink to="/">Фото</NavLink>
            </div>
            <div className={d.nav_edit_profile}>Редоктировать проф...</div>

        </div>
    )
}
export default UserNavigation;