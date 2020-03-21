import React from 'react';
import { connect } from "react-redux";
import { add_Friend, del_Friend, setUsersFriends } from "../../redux/friends-reduce";
import Friends from "./Friends";
import * as axios from 'axios';


class FriendsContainer extends React.Component{

     componentDidMount(){
         axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
         .then(response => {     
           
              this.props.setUsersFriends(response.data)                  
         })
     }

    render(){
        
        return(           
             <Friends 
             friends={this.props.friends}
            
             add_Friend={this.props.add_Friend}
             del_Friend={this.props.del_Friend}

            
             />
        )
    }
}



let mapStateToProps = (store) => {
    return{
       friends: store.friends.users
    }
} 

 
export default FriendsContainer = connect( mapStateToProps, {setUsersFriends, add_Friend, del_Friend} )( FriendsContainer );
