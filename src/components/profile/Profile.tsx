import * as React from 'react';
import d from './Profile.module.css';
import User from './user/User';
import UserNavigation from './userNavigation/UserNavigation';
import UserWritesNewPost from './userWritesNewPost/UserWritesNewPost';
import UserState from './userState/UserState';
import { BriefType } from '../../types/State_Profile_Reduce';
import NewPost from './newpost/Newpost';


type PropsType ={   
    avatarPost: string, 
    post: any,
    user: any, brief:  BriefType,
    placeholder: string
    onSubmit: () => void
    addPost: ()=> void  
}
const Profile:React.FC<PropsType> = (props: PropsType) => {   

    return (<div className={d.wrap}>
        <User user={props.user} />
        <UserNavigation />
        <div className={d.wrapper_state}>
            <UserState brief={props.brief} />
            <UserWritesNewPost
                user={props.user}
                onSubmit={props.onSubmit}                         
               />
            <div className={d.posts}>
               <NewPost post={props.post} /> 
            </div>
              
        </div> 
    </div>

    )
}

export default Profile;