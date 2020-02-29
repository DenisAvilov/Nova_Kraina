import React from 'react';
import Profile from './Profile';
import { actionPlacholder, actionAddPost } from '../../redux/profile-reduce';

const ProfileConteiner = (props) => {    
  
    let newTextUser = React.createRef();

    let addPost = () => {
        debugger;
        //props.addPost()       
        props.dispatch(actionAddPost())
      
    }

    let upPlaceholder = (text) => {        
        props.dispatch(actionPlacholder(text));
    }


    return ( <Profile profile={props.state} addPost={addPost}  upPlaceholder={upPlaceholder}/> )
}

export default ProfileConteiner;