import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import d from './AsideLeft.module.css';
import { NavLink } from 'react-router-dom';

const AsideLeft = (props) => {
    return (
        <div className={d.wrap}>
            <div className={d.title}>
                <div className={d.title_head}>
                    <h1>Главная</h1>
                </div>
                <div className={d.title_button}><span>Создать</span> </div>
            </div>
            <ul className={d.nav}>
                <li><NavLink to="/profile">
                    <div className={d.nav_user_wrap}>
                        <div className={d.nav_user_logo}>
                            <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" />
                        </div>
                        <div className={d.nav_user_name}>
                            <span>Илья Авилов</span>
                        </div>
                    </div>
                </NavLink></li>
                <li><NavLink to="/friends">
                    <div className={d.nav_user_wrap}>
                        <div className={d.nav_user_logo}>
                       <div className={d.nav_user_icon}> <FontAwesomeIcon icon="user-friends" /></div>
                        </div>
                        <div className={d.nav_user_name}>
                            <span>Друзья</span>                            
                        </div>
                    </div>
                </NavLink></li>
                <li><NavLink to="/dialogues">
                    <div className={d.nav_user_wrap}>
                        <div className={d.nav_user_logo}>
                       <div className={d.nav_user_icon}> <FontAwesomeIcon icon="diagnoses" /></div>
                        </div>
                        <div className={d.nav_user_name}>
                            <span>Диалоги</span>                            
                        </div>
                    </div>
                </NavLink></li>
                <li><NavLink to="/video">
                    <div className={d.nav_user_wrap}>
                        <div className={d.nav_user_logo}>
                       <div className={d.nav_user_icon}> <FontAwesomeIcon icon="file-video" /></div>
                        </div>
                        <div className={d.nav_user_name}>
                            <span>Видео</span>                            
                        </div>
                    </div>
                </NavLink></li>
                <li><NavLink to="/music">
                    <div className={d.nav_user_wrap}>
                        <div className={d.nav_user_logo}>
                       <div className={d.nav_user_icon}> <FontAwesomeIcon icon="music" /></div>
                        </div>
                        <div className={d.nav_user_name}>
                            <span>Музыка</span>                            
                        </div>
                    </div>
                </NavLink></li>
            </ul>
        </div>
    )
}

export default AsideLeft;