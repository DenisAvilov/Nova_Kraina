import * as React from 'react';
import d from './Profile.module.css';
import UserWritesNewPost from './userWritesNewPost/UserWritesNewPost';
import UserState from './userState/UserState';
import { BriefType, PostType,  ProfileType, PhotosType } from '../../types/State_Profile_Reduce';
import NewPost from './newpost/Newpost';

type ProfilePageType ={      
    post: Array<PostType>,
    profile: ProfileType, 
    brief:  BriefType,
    photos: PhotosType | undefined 
   
    onSubmit: (values: any) => void
    addPost: (writeNewPost: string)=> void     
}

const ProfilePage:React.FC<ProfilePageType> = (props: ProfilePageType) => {  

 let {brief, profile:{photos}, onSubmit, post } = props

    return (<div className={d.profilePage_wrapper}> 
                <div className={d.profileUserState_wrap}>
                     <UserState brief={brief} />   
                </div> 
                <div className={d.profilePost_wrap}>
                    <UserWritesNewPost  photos={photos}   onSubmit={onSubmit}  />
                    <NewPost post={post} /> 
                </div>            
           </div> 
    )
}

export default ProfilePage;