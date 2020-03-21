import React from 'react';
import d from './Profile.module.css';
import User from './user/User';
import UserNavigation from './userNavigation/UserNavigation';
import UserWritesNewPost from './userWritesNewPost/UserWritesNewPost';
import UserState from './userState/UserState';
import Post from './post/Post';

 
const Profile = (props) => {
 
    const post = props.profile.profile.post.map( p =>
         <Post key={p.id}  id={p.id}
         avatarImg={p.avatarImg}       
        title={p.title} imgPost={p.imgPost} 
        like={p.like} massenge={p.massenge}/>)

    return (<div className={d.wrap}>
        
        <User user={props.profile.profile.profile}/> 
 
        <UserNavigation />
        <div className={d.wrapper_state}> 
            <UserState brief={props.profile.profile.briefInformation} /> 
         <UserWritesNewPost
           
             addPost={props.addPost}
             addPlacholder={props.addPlacholder}
             placeholder={props.profile.profile.placeholder}/>  

            <div className={d.posts}>
                {post}
            </div>
        </div>
    </div>

    )
}

export default Profile;