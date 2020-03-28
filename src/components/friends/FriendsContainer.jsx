import React from 'react';
import { connect } from "react-redux";
import { add_Friend, del_Friend, setUsersFriends, stateTrackingButton } from "../../redux/friends-reduce";
import Friends from "./Friends";

import { usersApi } from '../../api/Api';


class FriendsContainer extends React.Component{

     componentDidMount(){

        usersApi.usersGet()
         .then(data => {           
              this.props.setUsersFriends(data)                  
         })
     }

    render(){
        
        return(           
             <Friends 
             friends={this.props.friends}            
             add_Friend={this.props.add_Friend}
             del_Friend={this.props.del_Friend}
             usersTracking={this.props.usersTracking}
             stateTrackingButton= {this.props.stateTrackingButton}
            
             />
        )
    }
}



let mapStateToProps = (store) => {
    return{
       friends: store.friends.users,
       usersTracking: store.friends.usersTracking
    }
} 

 
export default FriendsContainer = connect( mapStateToProps, {setUsersFriends, add_Friend, del_Friend, stateTrackingButton} )( FriendsContainer );
