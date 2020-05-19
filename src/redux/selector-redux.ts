import {createSelector} from 'reselect' 
import { RootReducerType } from './store-redux';

const UserProfile = (state: RootReducerType) => { return state.profile }

export const getPost =  createSelector( UserProfile, (profile) => { return profile.post } )
export const getBrief = createSelector(UserProfile, (profile) => { return profile.briefInformation} )
export const getPlaceholder = createSelector(UserProfile, (profile) => { return profile.placeholder} )
export const getProfile = createSelector(UserProfile, (profile) => { return profile.profile} )



 const General = (state: RootReducerType) => { return state.general }
 export const getOwnUserId = createSelector( General , (general) => {return general.id} )




