import * as React from 'react';
import d from './Profile.module.css';
import User from './user/User';
import { BriefType, PostType,  ProfileType, PhotosType } from '../../types/State_Profile_Reduce';
import ProfileUserNavigation from '../ProfileUserNavigation/ProfileUserNavigation';
import { Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import AboutContainer from '../about/AboutContainer';
type PropsType ={      
    post: Array<PostType>, profile: ProfileType, brief:  BriefType,
    placeholder: string,  isMyPage: boolean | null, status: string 
    userProfileId: number | null, emailUser: string | null, photoUser: PhotosType    
}
type ProfileDistpactPropsType = {
    saveFoto: (file: File) => void
    statusСhangedSuccess: (status: string) => void    
    onSubmit: (values: any) => void
    addPost: (writeNewPost: string)=> void   
}
// export const routes = [
   
//     {
//       path: "/about",
//       sidebar: () => <AboutContainer />,
  
//     },
//     {
//         path: "/about_overview",
//         sidebar: () => <AboutContainer />,
       
//       },
//     {
//       path: "/about_work_and_education",
//       sidebar: () => <AboutContainer/>,
    
//     }
//   ];

const Profile:React.FC<PropsType & ProfileDistpactPropsType> = (props: PropsType & ProfileDistpactPropsType) => { 
 let {emailUser ,isMyPage, status, statusСhangedSuccess, photoUser, saveFoto, profile, addPost, brief, profile:{photos}, onSubmit, post, userProfileId} = props
 let {path} = useRouteMatch();

    return (<div className={d.wrap}>
        
            <User userData={profile} isMyPage={isMyPage} status={status} statusСhangedSuccess={statusСhangedSuccess} saveFoto={saveFoto}/>
            <ProfileUserNavigation  emailUser={emailUser}  />        
            <Switch> 
               <Route exact path={`${path}`}  render={() =>
                    <ProfilePage brief={brief} photoUser={photoUser}  post={post} onSubmit={onSubmit}  addPost={addPost} /> }/>   
                    <Route path={`${path}/about`} render={() => <AboutContainer isMyPage={isMyPage} />} /> 
                    <Route path={`${path}/about_overview`} render={() => <AboutContainer isMyPage={isMyPage} />} />  
               {/*         <Route path={`${path}/about_work_and_education`} render={() => <AboutContainer isMyPage={isMyPage}/>} />    */}

                  {/* {routes.map((route, index) => (    <Route 
                    key={index}
                    path={`${path}`+ route.path}                   
                    children={<route.sidebar />}
                   />  
              ))}     */}

            </Switch>
           
          </div> 
    )
}
export default Profile;
