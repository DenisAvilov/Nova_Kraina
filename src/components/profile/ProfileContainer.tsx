import * as React from 'react';
import Profile from './Profile';
import {  addPost, setUsers, InitialStateType, } from '../../redux/profile-reduce';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux'
import { RootReducerType } from '../../redux/store-redux';
import {  BriefType, PostType, ProfileType } from '../../types/State_Profile_Reduce';
import { getPost, getBrief, getPlaceholder,  getProfile, getOwnUserId } from '../../redux/selector-redux'


type MapStateProps = {     
   post: Array<PostType>,       
   brief: BriefType,       
   placeholder: string,            
   profile: ProfileType,       
   generalId:   number | null     
   
}

type MapDistpathProps = {
    setUsers: (userId: number, generalId: number | null  ) => void
    addPost: (writeNewPost: string) => void
   
    
}

type  MathType = {
    isExact: boolean
    params: {userId: number}
    path: string
    url: string
}

type OwnStateProps = {  
    onSubmit: (values: any) => void 
    match: any
    isMyPage: boolean | null 
   
}

type PropsTypes = MapStateProps & MapDistpathProps & OwnStateProps 

class ProfileConteiner extends React.Component<PropsTypes, OwnStateProps> {
    func: ((obj: {}) => {}) | undefined; 
 
    drawComponent (){
        let {setUsers, match, generalId} = this.props      
       setUsers(match.params.userId, generalId)
    }   

    componentDidMount() { 
       this.drawComponent()      
    }   

     componentDidUpdate(prevProps:any ){
         let {setUsers, match, generalId} = this.props
         if(match.params.userId !== prevProps.match.params.userId){
            setUsers(match.params.userId, generalId)
         }
     }

    submit = (values: any) => {  
        let {addPost} = this.props     
         addPost(values.writeNewPost)
          values.writeNewPost = " "
      }

    render() {    
        return  <Profile {...this.props}  onSubmit={this.submit} 
        isMyPage={!this.props.match.params.userId} func={this.func}/> 
    }
}
let mapStateToProps = (state: RootReducerType) : MapStateProps  => {   
 
        return {      
            post: getPost(state),       
            brief: getBrief(state),       
            placeholder: getPlaceholder(state),                     
            profile: getProfile(state),  
            generalId: getOwnUserId(state)            
}}

export default compose(
    withRouter,
    withAuthRedirect,
    connect<MapStateProps, MapDistpathProps, OwnStateProps, RootReducerType>(mapStateToProps,
         {  addPost, setUsers,  })
)(ProfileConteiner)


