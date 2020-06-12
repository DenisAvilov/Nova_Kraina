import React from 'react';
import d from './ProfileUserNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import { BriefType } from '../../types/State_Profile_Reduce';
import profile from '../../redux/profile-reduce';


type UserNavigationType = {
     emailUser: string | null
}

const ProfileUserNavigation: React.FC<UserNavigationType> = (props: UserNavigationType) => {
  let  {emailUser} = props 

    return (
        <div className={d.nav}>
            <div className={d.nav_info}>
                <NavLink exact to= {'/profile' } activeStyle={{backgroundColor: "blue"}}>Хроника</NavLink>
                <NavLink exact to= { '/profile/about'} activeStyle={{backgroundColor: "blue"}}>Информация</NavLink>
                <NavLink to={  '/profile/friends'} activeStyle={{backgroundColor: "blue"}}>Друзья</NavLink>  
                <NavLink to={  '/profile/fotos'} activeStyle={{backgroundColor: "blue"}}>Фото</NavLink>
            </div>
            <div className={d.nav_edit_profile}>Редоктировать проф...</div>

        </div>
    )
}
export default ProfileUserNavigation;