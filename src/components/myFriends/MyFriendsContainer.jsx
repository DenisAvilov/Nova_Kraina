import React from 'react'
import MyFriends from './MyFriends';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setUsers } from '../../redux/my-friends-reduce';

class MyFriendsContainer extends React.Component{

componentDidMount(){
 
    axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
    .then(response => {         
         this.props.setUsers(response.data)                  
    })
}

    render(){ 
        return(
           < MyFriends
           myfriends={this.props.myfriends}
           users={this.props.users}
           />
        )
    }
} 
 
let mapStateToProps = (store) => {
   
    return{
    users: store.profile,
    myfriends: store.myfriends
    }
} 


export default connect( mapStateToProps, { setUsers } )(  MyFriendsContainer );

