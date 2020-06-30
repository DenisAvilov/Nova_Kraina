import React from 'react';
import { connect } from 'react-redux';
import AsideLeft from './AsideLeft';
import { RootReducerType } from '../../redux/store-redux';
import { GeneralType } from '../../types/State_General_Reduce';
import { emailUser } from '../../redux/selector-redux';
import { PhotosType } from '../../types/State_Profile_Reduce';
import { getPhotoUser } from '../../redux/general';
import PhotoUser from './PhotoUser';

type ContainerPropsType = {
    emailUser: string | null
    photos: PhotosType | undefined
    user: GeneralType
    photo: PhotosType | undefined
}
type DistpachType = {
    getPhotoUser : (userId: number | null) => void
}
type OwnPropsType = {}
type AsideAllProps =  ContainerPropsType & DistpachType & OwnPropsType
class AsideLeftContainer extends React.Component<AsideAllProps>{

   componentDidMount(){
    let{ user:{isYou,id}} = this.props
    isYou && this.props.getPhotoUser(id)
   }

    render(){   
        let {emailUser, user, photos, photo} = this.props     
        return(
           
            <AsideLeft user={user} emailUser={emailUser} photos={photos} photo={photo}/>
           
          
        )
    }

}
let  mapStateToProps = (store: RootReducerType) : ContainerPropsType=>{

    return{
        user: store.general,
        photo: store.general.photo,
        photos: store.profile.profile.photos,        
        emailUser: emailUser(store)
    }
}

{/* <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState></TStateProps> */}

export default   connect<ContainerPropsType,  DistpachType, OwnPropsType, RootReducerType>( mapStateToProps , { getPhotoUser })(AsideLeftContainer)
