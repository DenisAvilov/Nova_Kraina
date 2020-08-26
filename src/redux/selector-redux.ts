import {createSelector} from 'reselect' 
import { ResponseFriendType } from '../types/State_Profile_Reduce';
import { ItemsType } from './friends-reduce';
import { RootReducerType } from './store-redux';
const UserFriends = (state: RootReducerType) => { return state.friends }
const UserProfile = (state: RootReducerType) => { return state.profile }

export const getPost =  createSelector( UserProfile, (profile) => { return profile.post } )
export const getBrief = createSelector(UserProfile, (profile) => { return profile.briefInformation} )
export const getPlaceholder = createSelector(UserProfile, (profile) => { return profile.placeholder} )
export const getProfile = createSelector(UserProfile, (profile) => { return profile.profile} )
export const getStatus = createSelector(UserProfile, (profile) => {return profile.status })
export const getFriends = createSelector(UserFriends, (friends) => {return friends.users} )
export const getUsersTracking = createSelector(UserFriends, (friends) => {return friends.usersTracking} )

 const General = (state: RootReducerType) => { return state.general }
 export const getOwnUserId = createSelector( General , (general) => {return general.id} )

 export const emailUser = createSelector( General , (general) => { 
             return    general.email    
       
} )

const Friend = (state: RootReducerType) => { return state.friends.friend }
export const getFriend = createSelector( Friend , (friend) => {    
    return    friend
} )
const FriendTotalCountFriend = (state: RootReducerType) => { return state.friends.totalCountFriend }
export const getTotalCountFriend = createSelector( FriendTotalCountFriend , (totalCountFriend) => {    
    return    totalCountFriend
} )
