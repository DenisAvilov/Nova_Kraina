import * as React from 'react';
import { PhotosType } from '../../types/State_Profile_Reduce';

type AsideLeftType = {  
    photo: PhotosType | undefined
}
const PhotoUser: React.FC<AsideLeftType>  = (props: AsideLeftType) => {
    const { photo } = props
    return ( <img src={ photo?.small == undefined ? "https://www.w3schools.com/w3css/img_avatar3.png" : photo?.small } />   )
}

export default PhotoUser;