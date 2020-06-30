import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import d from './AsideLeft.module.css';
import { NavLink } from 'react-router-dom';
import { GeneralType } from '../../types/State_General_Reduce';
import { PhotosType } from '../../types/State_Profile_Reduce';
import PhotoUser from './PhotoUser';

export type AsideLeftType = {
    user: GeneralType
    emailUser: string | null
    photos: PhotosType | undefined
   photo: PhotosType | undefined
}
const AsideLeft: React.FC<AsideLeftType>  = (props: AsideLeftType) => {
    const {emailUser, photos, photo} = props
    return (
        <div className={d.wrap}>
            <div className={d.title}>
                <div className={d.title_head}>
                    <h1>Главная</h1>
                     
                </div>
                <div className={d.title_button}><span>Создать</span> </div>
            </div>
            <ul className={d.nav}>
                <li><NavLink to={"/profile"} activeStyle={{color: 'var(--accent)'}}>                   
                        
                             <div className={d.nav_user_wrap}>
                                <div className={d.nav_user_logo}>
                                   <PhotoUser photo={photo}/> 
                                      
                                 </div>
                                <div className={d.nav_user_name}>
                                    
                         <span>{props.user.login? props.user.login : "User Name"}</span>
                                </div>
                            </div>                  
                </NavLink></li>
                <li><NavLink to="/friends" activeStyle={{color: 'var(--accent)'}}>
                    <div className={d.nav_user_wrap}>
                        <div className={d.nav_user_logo}>
                       <div className={d.nav_user_icon}> <FontAwesomeIcon icon="user-friends" /></div>
                        </div>
                        <div className={d.nav_user_name}>
                            <span>Друзья</span>                            
                        </div>
                    </div>
                </NavLink></li>         
            </ul> 
        </div>
    )
}

export default AsideLeft;