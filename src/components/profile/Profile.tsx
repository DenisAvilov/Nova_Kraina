import * as React from 'react';
import d from './Profile.module.css';
import User from './user/User';
import UserNavigation from './userNavigation/UserNavigation';
import UserWritesNewPost from './userWritesNewPost/UserWritesNewPost';
import UserState from './userState/UserState';
import { BriefType, PostType, PhotosType, ProfileType } from '../../types/State_Profile_Reduce';
import NewPost from './newpost/Newpost';
import { InitialStateType } from '../../redux/profile-reduce';




type PropsType ={      
    post: Array<PostType>,
    profile: ProfileType, 
    brief:  BriefType,
    placeholder: string
    isMyPage: boolean | null 
  
    onSubmit: (values: any) => void
    addPost: (writeNewPost: string)=> void 
    func :  ((obj: {}) => {}) | undefined
    
}



const Profile:React.FC<PropsType> = (props: PropsType) => {   
 let {isMyPage, func} = props

    return (<div className={d.wrap}>
        <User userData={props.profile} isMyPage={isMyPage}  />
        <UserNavigation />
        <div className={d.wrapper_state}>
            <UserState brief={props.brief} />
            <UserWritesNewPost
                photos={props.profile.photos}
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