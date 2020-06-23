import * as React from 'react';
import Profile from './Profile';
import {  addPost, setUsers, InitialStateType, statusСhangedSuccess, saveFoto} from '../../redux/profile-reduce';
import { connect } from 'react-redux';
import { withRouter,  useRouteMatch, } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux'
import { RootReducerType } from '../../redux/store-redux';
import {  BriefType, PostType, ProfileType, PhotosType } from '../../types/State_Profile_Reduce';
import { getPost, getBrief, getPlaceholder,  getProfile, getOwnUserId, emailUser,  } from '../../redux/selector-redux'

type MapStateProps = {     
   post: Array<PostType>, brief: BriefType, placeholder: string, profile: ProfileType, generalId:   number | null  
   status: string, emailUser: string | null }
type MapDistpathProps = {
    setUsers: (userId: number | null, generalId: number | null  ) => void
    addPost: (writeNewPost: string) => void
    statusСhangedSuccess: (status: string) => void
    saveFoto:<PhotosType> (file: File)  => void     
}
type  MathType = {
    isExact: boolean,   params: {userId: number},  path: string, url: string
}
type OwnStateProps = {  
    onSubmit: (values: any) => void    
    isMyPage: boolean | null 
    userProfileId: number | null
    match: any      
}
interface DetailParams {
    id: string;
   }
type PropsTypes = MapStateProps & MapDistpathProps & OwnStateProps



class ProfileConteiner extends React.Component<PropsTypes, OwnStateProps> { 
  
    

    drawComponent (){  
        let {setUsers, match, generalId, emailUser} = this.props  

        
                   setUsers(match.params.userId, generalId,)   }

     componentDidMount() {        
        this.drawComponent()      
     }
    componentDidUpdate(prevProps:any ){ 
            let {setUsers, match, generalId } = this.props    
            //беру URL
            let userUrlSlag = this.props.match.url
             //из URL беру второе значение после второго слеша /profile/about               
            userUrlSlag = userUrlSlag.split('/')[2]
            // проверяю значение на число
         if(!isNaN( userUrlSlag ) ){
             //userUrlSlag is number
             console.log(userUrlSlag)  
                //match.params.userId попадает userUrlSlag
             if(match.params.userId !== prevProps.match.params.userId){ 
                        //generalId это мои UserID
               setUsers(match.params.userId, generalId)            
            }
         }
         else{// если значение пустое userUrlSlag             
           if(!userUrlSlag){
                if(match.params.userId !== prevProps.match.params.userId){            
                    setUsers(match.params.userId, generalId)            
                }
                 console.log("nety")
            }else{               
            console.log(userUrlSlag)              
            if(match.params.userId !== prevProps.match.params.userId){            
                setUsers(generalId, generalId)            
            }
            } }
         }
         
    submit = (values: any) => {  
        let {addPost} = this.props     
         addPost(values.writeNewPost)
          values.writeNewPost = " "
    }
    
    render() { 

        let {emailUser, userProfileId, statusСhangedSuccess, saveFoto,/* match:{params:{userId}},*/ status} = this.props
        return  <Profile {...this.props}  userProfileId={userProfileId}  onSubmit={this.submit}
         status={status}
         statusСhangedSuccess={statusСhangedSuccess}
         isMyPage={true}       
         saveFoto={saveFoto}
         emailUser={emailUser}         
         />
         
       
        
        
    }
}
let mapStateToProps = (state: RootReducerType) : MapStateProps  => {   

        return {      
            post: getPost(state),  
            status: state.profile.status,     
            brief: getBrief(state),       
            placeholder: getPlaceholder(state),                     
            profile: getProfile(state),  
            generalId: getOwnUserId(state),
            emailUser: emailUser(state)

}}

export default compose(
    withRouter,
    withAuthRedirect,
    connect<MapStateProps, MapDistpathProps, OwnStateProps, RootReducerType>(mapStateToProps,
         {  addPost, setUsers, statusСhangedSuccess, saveFoto })
)(ProfileConteiner)


