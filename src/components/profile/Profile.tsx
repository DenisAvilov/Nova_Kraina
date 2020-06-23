import * as React from 'react';
import d from './Profile.module.css';
import User from './user/User';
import { BriefType, PostType,  ProfileType } from '../../types/State_Profile_Reduce';
import ProfileUserNavigation from '../ProfileUserNavigation/ProfileUserNavigation';
import { Route, Switch, useRouteMatch} from 'react-router-dom';
import ProfilePage from './ProfilePage';
import AboutContainer from '../about/AboutContainer';
// import { AboutDetail } from '../about/aboutDetail/AboutDetail';

type PropsType ={      
    post: Array<PostType>, profile: ProfileType, brief:  BriefType,
    placeholder: string,  isMyPage: boolean | null, status: string 
    userProfileId: number | null, emailUser: string | null
    saveFoto: (file: File) => void
    statusСhangedSuccess: (status: string) => void    
    onSubmit: (values: any) => void
    addPost: (writeNewPost: string)=> void     
}
const Profile:React.FC<PropsType> = (props: PropsType) => {  


 let {emailUser ,isMyPage, status, statusСhangedSuccess, saveFoto, profile, addPost, brief, profile:{photos}, onSubmit, post, userProfileId} = props

    return (<div className={d.wrap}>
         
            <User userData={profile} isMyPage={isMyPage} status={status} statusСhangedSuccess={statusСhangedSuccess} saveFoto={saveFoto}/>
            <ProfileUserNavigation  emailUser={emailUser}  /> 
            
            <Route exact path={'/profile'} render={() =>
                   <ProfilePage brief={brief} photos={photos} post={post} onSubmit={onSubmit} profile={profile} addPost={addPost} /> }/> 
         
            <Route  path={'/profile/about'} render={() => <AboutContainer />} />
            <Route  path={'/profile/about_overview'} render={() => <AboutContainer />} />
            <Route  path={'/profile/about_work_and_education'} render={() => <AboutContainer />} />

          </div>
    )
}
export default Profile;
