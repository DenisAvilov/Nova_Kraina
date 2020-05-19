import * as React from 'react';
import d from './User.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileType, PhotosType } from '../../../types/State_Profile_Reduce';

interface IProps {
    userData: ProfileType 
   
  }

const User: React.SFC<IProps> = (props: IProps) => {  
    let { userData:{photos, fullName}  } = props
    return (
        <div className={d.header}>   
                  <div className={d.header_bg_logo}> 
                  {UserProfileFoto( photos, "large" )}
                  </div>        
               <div className={d.header_logo_wrap}>
                    <div className={d.header_logo}>
                      {UserProfileFoto( photos, "small" )}              
                    </div>
                <div className={d.header_logo_download}>
                    <FontAwesomeIcon icon="camera" />
                </div>
                <h1 className={d.name}>{fullName === undefined ? undefined : fullName}</h1> 
                <span className={d.add_biography} title="в разработке">Добавить информацию</span>
            </div>
        </div>
    )         
}



export default User;




export const UserProfileFoto = (photos: PhotosType | undefined , action : string) =>{
    return(<>       
                {action == "large" ? photos === undefined ? <img src="https://www.open.edu/openlearn/ocw/pluginfile.php/906137/mod_resource/content/0/m812_olhp_786x400.jpg"/>
               : <img src={photos.large === null ? "https://www.open.edu/openlearn/ocw/pluginfile.php/906137/mod_resource/content/0/m812_olhp_786x400.jpg" : photos.large} /> : 
               photos === undefined ? <img src="https://www.w3schools.com/w3css/img_avatar3.png"/>
                     : <img src={photos.small === null ? "https://www.w3schools.com/w3css/img_avatar3.png" : photos.small} />
               } 
            </> 
    )
}