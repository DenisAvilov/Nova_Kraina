import * as React from 'react';
import d from './Profile.module.css';
import UserWritesNewPost from './userWritesNewPost/UserWritesNewPost';
import UserState from './userState/UserState';
import { BriefType, PostType,  ProfileType, PhotosType } from '../../types/State_Profile_Reduce';
import NewPost from './newpost/Newpost';
import { WriteNewPostType } from './ProfileContainer';

type ProfilePageType ={      
    post: Array<PostType>,
    photoUser: PhotosType | undefined, 
    brief:  BriefType,
  
   
    onSubmit: () => void
    addPost: (writeNewPost: string)=> void     
}

const ProfilePage:React.FC<ProfilePageType> = (props: ProfilePageType) => {  

 let {brief, photoUser, onSubmit, post } = props

    return (<div className={d.profilePage_wrapper}> 
                <div className={d.profileUserState_wrap}>
                     <UserState brief={brief} />   
                </div> 
                <div className={d.profilePost_wrap}>
                    <UserWritesNewPost  photo={photoUser}   onSubmit={onSubmit}  />
                    <NewPost post={post} /> 
                </div>            
           </div> 
    )
}

export default ProfilePage;