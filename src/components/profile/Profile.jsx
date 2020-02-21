import React from 'react';
import d from './Profile.module.css';
import User from './user/User';
import UserNavigation from './userNavigation/UserNavigation';
import UserWritesNewPost from './userWritesNewPost/UserWritesNewPost';
import UserState from './userState/UserState';
import Post from './post/Post';


const Profile = (props) => {
    return (<div className={d.wrap}>
        <User user={props.state.profile.user}/>
        <UserNavigation />
        <div className={d.wrapper_state}>
            <UserState />
            <UserWritesNewPost />
            <div className={d.posts}>
                <Post />
            </div>
        </div>
    </div>

    )
}

export default Profile;