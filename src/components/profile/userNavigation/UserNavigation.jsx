import React from 'react';
import d from './UserNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserNavigation = () => {
    return (
        <div className={d.nav}>
            <div className={d.nav_info}>
                <a href="">Хроника</a>
                <a href="">Информация</a>
                <a href="">Друзья</a>
                <a href="">Фото</a>
            </div>
            <div className={d.nav_edit_profile}>Редоктировать проф...</div>
        </div>
    )
}
export default UserNavigation;