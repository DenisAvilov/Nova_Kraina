import {createSelector} from 'reselect' 
import { RootReducerType } from './store-redux';
const UserFriends = (state: RootReducerType) => { return state.friends }
const UserProfile = (state: RootReducerType) => { return state.profile }

export const getPost =  createSelector( UserProfile, (profile) => { return profile.post } )
export const getBrief = createSelector(UserProfile, (profile) => { return profile.briefInformation} )
export const getPlaceholder = createSelector(UserProfile, (profile) => { return profile.placeholder} )
export const getProfile = createSelector(UserProfile, (profile) => { return profile.profile} )
export const getStatus = createSelector(UserProfile, (profile) => {return profile.status })
export const getFriends = createSelector(UserFriends, (friends) => {return friends.users} )


 const General = (state: RootReducerType) => { return state.general }
 export const getOwnUserId = createSelector( General , (general) => {return general.id} )

 export const emailUser = createSelector( General , (general) => { 
             return    general.email    
       
} )




