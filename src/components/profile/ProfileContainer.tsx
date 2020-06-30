import * as React from 'react';
import Profile from './Profile';
import { addPost, setUsers, InitialStateType, statusСhangedSuccess, saveFoto } from '../../redux/profile-reduce';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux'
import { RootReducerType } from '../../redux/store-redux';
import { BriefType, PostType, ProfileType, PhotosType } from '../../types/State_Profile_Reduce';
import { getPost, getBrief, getPlaceholder, getProfile, getOwnUserId, emailUser, } from '../../redux/selector-redux'


type MapStateProps = {
    post: Array<PostType>, brief: BriefType, placeholder: string, profile: ProfileType, generalId: number | null
    status: string, emailUser: string | null, photoUser: PhotosType,

}
type MapDistpathProps = {
    setUsers: (userId: number | null) => void
    addPost: (writeNewPost: string) => void
    statusСhangedSuccess: (status: string) => void
    saveFoto: <PhotosType> (file: File) => void
}

type OwnStateProps = {
    onSubmit: (values: any) => void
    isMyPage: boolean | null
    userProfileId: number | null
    match: any, history: any
}

type PropsTypes = MapStateProps & MapDistpathProps & OwnStateProps

class ProfileConteiner extends React.Component<PropsTypes, OwnStateProps> {
    isMyPage!: boolean | null;

    drawComponent() {

        let { setUsers, match, generalId, emailUser, history } = this.props
        let userProfileId: number | null = null;

        if (isFinite(match.params.userId)) {
            userProfileId = match.params.userId
        } else {
            userProfileId = generalId
        }
        setUsers(userProfileId)
    }

    componentDidMount() {
        this.drawComponent()
    }

    componentDidUpdate(prevProps: PropsTypes) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.drawComponent()
        }
        let { match } = this.props
        this.isMyPage = !isFinite(match.params.userId)
    }

    submit = (values: any) => {
        let { addPost } = this.props
        addPost(values.writeNewPost)
    }

    render() {
        let { emailUser, userProfileId, statusСhangedSuccess, saveFoto, photoUser, status } = this.props
        return <Profile {...this.props} userProfileId={userProfileId} onSubmit={this.submit}
            status={status}
            statusСhangedSuccess={statusСhangedSuccess}
            isMyPage={this.isMyPage}
            saveFoto={saveFoto}
            emailUser={emailUser}
            photoUser={photoUser}
        />
    }
}
let mapStateToProps = (state: RootReducerType): MapStateProps => {

    return {
        post: getPost(state),
        status: state.profile.status,
        brief: getBrief(state),
        placeholder: getPlaceholder(state),
        profile: getProfile(state),
        generalId: getOwnUserId(state),
        emailUser: emailUser(state),
        photoUser: state.general.photo

    }
}

export default compose(
    withRouter,
    withAuthRedirect,
    connect<MapStateProps, MapDistpathProps, OwnStateProps, RootReducerType>(mapStateToProps,
        { addPost, setUsers, statusСhangedSuccess, saveFoto })
)(ProfileConteiner)














// componentDidUpdate(prevProps:any ){ 
//     let {setUsers, match, generalId } = this.props    
//     //беру URL
//     let userUrlSlag = this.props.match.url
//      //из URL беру второе значение после второго слеша /profile/about               
//     userUrlSlag = userUrlSlag.split('/')[2]
//     // проверяю значение на число
//  if(!isNaN( userUrlSlag ) ){
//      //userUrlSlag is number
//      console.log(userUrlSlag)  
//         //match.params.userId попадает userUrlSlag
//      if(match.params.userId !== prevProps.match.params.userId){ 
//                 //generalId это мои UserID
//        setUsers(match.params.userId, generalId)            
//     }
//  }
//  else{// если значение пустое userUrlSlag             
//    if(!userUrlSlag){
//        debugger
//         if(match.params.userId !== prevProps.match.params.userId){            
//             setUsers(match.params.userId, generalId)            
//         }             
//          console.log("nety")
//     }else{   
//         debugger 
//         if(match.params.userId !== prevProps.match.params.userId){

//         // switch(userUrlSlag){
//         //     case'about': {
//         //     setUsers(generalId, generalId);
//         //     }
//         //     case'about_work_and_education':{
//         //     setUsers(generalId, generalId);}
//         //  default:{
//         //     setUsers(match.params.userId, generalId)  
//         //  }
//         // }   
//         setUsers(match.params.userId, generalId)  
//     }
//     console.log(userUrlSlag)


//     } }
//  }
