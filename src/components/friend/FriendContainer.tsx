import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { ItemsType, setFriendData,  friendUnFollow } from '../../redux/friends-reduce'
import { getFriend, getTotalCountFriend, getUsersTracking } from '../../redux/selector-redux'
import { RootReducerType } from '../../redux/store-redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import FriendFollow from './FriendFollow'


 class FriendContainer extends React.Component<PropsType> { 

    componentDidMount(){
    let {setFriendData} = this.props    
    setFriendData(true)
    }
  
 
    render(){      
        return(
            <React.Fragment>
              <FriendFollow friendData={this.props.friendData} usersTracking={this.props.usersTracking} 
                friendUnFollow={this.props.friendUnFollow} />
            </React.Fragment>
        )
    }
 }

let mapStateToProps = (store: RootReducerType):MapStateToProps =>{ 
    return{
        friendData : getFriend(store),
        totalCountFriend : getTotalCountFriend(store),
        usersTracking: getUsersTracking(store)
    }
} 


export default compose<React.ComponentType>(
    withRouter,   
    connect<MapStateToProps, MapDispatch, OwnProps, RootReducerType>(mapStateToProps,
        {  setFriendData, friendUnFollow})
)(FriendContainer)

 type MapStateToProps = {
    friendData: Array<ItemsType> 
    usersTracking:  Array<number>
    totalCountFriend: number
 }
 type MapDispatch = {
    setFriendData: (friend:boolean) => void   
    friendUnFollow: (user: number) => void
 }
 type OwnProps = {
   
 }
 type PropsType = MapStateToProps & MapDispatch & OwnProps