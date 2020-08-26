import * as React from 'react'
import Profile from './Profile'
import { addPost,  setUsers, statusСhangedSuccess, saveFoto} from '../../redux/profile-reduce'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'
import { RootReducerType } from '../../redux/store-redux'
import { BriefType, PostType, ProfileType, PhotosType } from '../../types/State_Profile_Reduce'
import { getPost, getBrief, getPlaceholder, getProfile, getOwnUserId, emailUser, getTotalCountFriend } from '../../redux/selector-redux'


class ProfileConteiner extends React.Component<PropsType> {
    isMyPage!: boolean | null;
    
    
    drawComponent() {

        let { setUsers, match, generalId} = this.props
        let userProfileId: number | null | string = null;    
      
      
        
        if (isFinite(match.params.userId as unknown as number) ) {
            userProfileId = match.params.userId
        } else {
            userProfileId = generalId
        }
        setUsers(userProfileId)
       
    }

    componentDidMount() {
        this.drawComponent()
       
       
    }

    componentDidUpdate(prevProps: RouteComponentProps<MapParamsTypes> ) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.drawComponent()
        }
        let { match } = this.props
         //I mast fix this bug
         
        this.isMyPage = !isFinite(match.params.userId as unknown as number)
    }

    submit = (values: WriteNewPostType) => {
        let { addPost } = this.props
        addPost(values.writeNewPost)
    }

    render() {
        let { emailUser,  statusСhangedSuccess, saveFoto, photoUser, status } = this.props

        return <Profile {...this.props}  onSubmit={this.submit}
            status={status}
            statusСhangedSuccess={statusСhangedSuccess}
            isMyPage={this.isMyPage}
            saveFoto={saveFoto}
            emailUser={emailUser}
            photoUser={photoUser}
        />
    }
}
let mapStateToProps = (state: RootReducerType): MapPropsType => {

    return {
        post: getPost(state),
        status: state.profile.status,
        brief: getBrief(state),
        placeholder: getPlaceholder(state),
        profile: getProfile(state),
        generalId: getOwnUserId(state),
        emailUser: emailUser(state),
        photoUser: state.general.photo,
        totalCountFriend: getTotalCountFriend(state)

    }
}

export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect,
    connect<MapPropsType, MapDistpathProps, OwnStateProps, RootReducerType>(mapStateToProps,
        {  addPost, setUsers, statusСhangedSuccess, saveFoto })
)(ProfileConteiner)
export type WriteNewPostType = { writeNewPost: string}
type MapPropsType = {
    post: Array<PostType>, brief: BriefType, placeholder: string, profile: ProfileType, generalId: number | null
    status: string, emailUser: string | null, photoUser: PhotosType, totalCountFriend: number

}
type MapDistpathProps = {
    setUsers: (userId: number | null | string) => void
    addPost: (writeNewPost: string) => void
    statusСhangedSuccess: (status: string) => void
    saveFoto: (file: File) => void
 
}
type OwnStateProps = {
    onSubmit: (values: any) => void
    isMyPage: boolean | null
    userProfileId: number | null 
   
}
type MapParamsTypes = {
    userId: string 
     
}
type PropsType =    MapPropsType  &  MapDistpathProps  &   RouteComponentProps<MapParamsTypes> //type match react-router-dom
 


