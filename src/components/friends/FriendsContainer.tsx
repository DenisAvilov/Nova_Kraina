import React from 'react';
import { connect } from "react-redux";
import { getUsersThunkCreator, friendFollow, friendUnFollow, ItemsType, viewCountPage, pagination } from "../../redux/friends-reduce";

import Friends from "./Friends";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { RootReducerType } from '../../redux/store-redux';
import { emailUser, getFriends } from '../../redux/selector-redux';



type mapStateToPropsType = {
    friends: Array<ItemsType>
    usersTracking: Array<number>
    totalCount: number
    emailUser: string | null
    page: number
}
type mapDispathToPropsType = {    
    getUsersThunkCreator: () => void   
    friendFollow: (userID: number ) => void
    friendUnFollow: (userID: number ) => void  
    viewCountPage: (item: number) => void 
    pagination:(page: number) => void

}
type stateToProps = {
}

type PropsType = mapStateToPropsType & mapDispathToPropsType & stateToProps

class FriendsContainer extends React.Component<PropsType> {  
    componentDidMount() {
         this.props.getUsersThunkCreator()
    }

    render() {
       let {friends, usersTracking, friendFollow, friendUnFollow, pagination, emailUser, totalCount, viewCountPage, page} = this.props
        return (             
            <Friends
                friends={friends}
                usersTracking={usersTracking}
                friendFollow={friendFollow}
                friendUnFollow={friendUnFollow}
                pagination={pagination}
                emailUser={emailUser}

                totalCount={totalCount}
                viewCountPage={viewCountPage}
                page={page}
            />
           
        )
    }
}
//Проверка type того, что возвращяем mapStateToPropsType
//Проверка type того, что принимаем RootReducerType
let mapStateToProps = (store: RootReducerType) : mapStateToPropsType => {
   
    return {       
        friends: getFriends(store),
        usersTracking: store.friends.usersTracking,
        totalCount: store.friends.totalCount,
        page: store.friends.page,
        emailUser: emailUser(store)
    }
}
//Перейти  в types connect и посмотреть что передавать TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<stateToProps, mapDispathToPropsType,  mapStateToPropsType, RootReducerType>(
        mapStateToProps, { getUsersThunkCreator,  friendFollow, friendUnFollow, viewCountPage, pagination }))(FriendsContainer)


      