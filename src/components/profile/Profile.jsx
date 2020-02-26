import React from 'react';
import d from './Profile.module.css';
import User from './user/User';
import UserNavigation from './userNavigation/UserNavigation';
import UserWritesNewPost from './userWritesNewPost/UserWritesNewPost';
import UserState from './userState/UserState';
import Post from './post/Post';


const Profile = (props) => {
    
    const post = props.state.profile.post.map( p => <Post id={p.id} avatarImg={p.avatarImg}
        name={p.name} secondName={p.secondName} 
        title={p.title} imgPost={p.imgPost} like={p.like} massenge={p.massenge}/>)

    return (<div className={d.wrap}>
        <User user={props.state.profile.user}/>
        <UserNavigation />
        <div className={d.wrapper_state}>
            <UserState brief={props.state.profile.briefInformation} /> 
            <UserWritesNewPost dispatch={props.dispatch} placeholder={props.state.profile.placeholder}/>
            <div className={d.posts}>
                {post}
            </div>
        </div>
    </div>

    )
}

export default Profile;