import React from 'react';
import { connect } from "react-redux";
import { getUsersThunkCreator, friendFollow, friendUnFollow, ItemsType } from "../../redux/friends-reduce";
import Friends from "./Friends";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { RootReducerType } from '../../redux/store-redux';

type mapStateToPropsType = {
    friends: Array<ItemsType>
    usersTracking: Array<number>
}
type mapDispathToPropsType = {    
     getUsersThunkCreator: () => void   
    friendFollow: (userID: number) => void
    friendUnFollow: (userID: number) => void   
}
type stateToProps = {
}

type PropsType = mapStateToPropsType & mapDispathToPropsType & stateToProps

class FriendsContainer extends React.Component<PropsType> {  
    componentDidMount() {
         this.props.getUsersThunkCreator()
    }

    render() {
       
        return (
            <Friends
                friends={this.props.friends}
                usersTracking={this.props.usersTracking}
                friendFollow={this.props.friendFollow}
                friendUnFollow={this.props.friendUnFollow}
            />
        )
    }
}
//Проверка type того, что возвращяем mapStateToPropsType
//Проверка type того, что принимаем RootReducerType
let mapStateToProps = (store: RootReducerType) : mapStateToPropsType => {
   
    return {
        friends: store.friends.users,
        usersTracking: store.friends.usersTracking
    }
}
//Перейти  в types connect и посмотреть что передавать TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
export default compose(
    withAuthRedirect,
    connect<stateToProps, mapDispathToPropsType,  mapStateToPropsType, RootReducerType>(
        mapStateToProps, { getUsersThunkCreator,  friendFollow, friendUnFollow }))(FriendsContainer)


      