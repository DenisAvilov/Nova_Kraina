import React from 'react';
import { connect } from "react-redux";
import {  getUsersThunkCreator, friendFollow, friendUnFollow } from "../../redux/friends-reduce";
import Friends from "./Friends";
import { withAuthRedirect } from '../hoc/withAuthRedirect';


class FriendsContainer extends React.Component{

     componentDidMount(){
        this.props.getUsersThunkCreator()
    //    usersApi.usersGet()
    //   .then(data => {           
    //      this.props.setUsersFriends(data)                  
    //     })
     }

    render(){
        
        return(           
             <Friends 
             friends={this.props.friends}            
             usersTracking={this.props.usersTracking}
             friendFollow={this.props.friendFollow}
             friendUnFollow={this.props.friendUnFollow}
            
             />
        )
    }
}

  
let WithAuthRedirectHoc = withAuthRedirect(FriendsContainer)




let mapStateToProps = (store) => {
    return{
       friends: store.friends.users,
       usersTracking: store.friends.usersTracking
    }
} 

 

export default FriendsContainer = connect( mapStateToProps,
     { getUsersThunkCreator, friendFollow, friendUnFollow} )( WithAuthRedirectHoc );
    