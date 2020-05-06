import React from 'react';
import { connect } from "react-redux";
import { getUsersThunkCreator, friendFollow, friendUnFollow } from "../../redux/friends-reduce";
import Friends from "./Friends";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator()
    }

    render() {
        console.log("Render Friends()")
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

let mapStateToProps = (store) => {
    console.log("mapStateToProps Friends()")
    return {
        friends: store.friends.users,
        usersTracking: store.friends.usersTracking
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getUsersThunkCreator, friendFollow, friendUnFollow }))(FriendsContainer)


