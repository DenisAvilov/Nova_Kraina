import * as React from 'react';
import d from './User.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileType, PhotosType } from '../../../types/State_Profile_Reduce';
import { Status } from '../status/Status';

interface IPropsPropps {
    userData: ProfileType 
    isMyPage: boolean |  null
    status: string
   
    saveFoto: (file: File) => void
    statusСhangedSuccess: (status: string) => void   
  }
  
 
type IProps = IPropsPropps 
const User: React.SFC<IProps> = (props: IProps) => {  
    let { userData:{photos, fullName}, isMyPage, status, statusСhangedSuccess, saveFoto } = props
    
   let addFile = (e: React.ChangeEvent<HTMLInputElement>) : void => {    
         if(e.target.files?.length )
           
           { saveFoto(e.target.files[0] ) }
    }
    return (
        <div className={d.header}>   
                  <div className={d.header_bg_logo}> 
                  {UserProfileFoto( photos, "large" )}
                  </div>    
               <div className={d.header_logo_wrap}>

                    <div className={d.header_logo}>
                      {UserProfileFoto( photos, "small" )}                      
                    </div>
                    {isMyPage &&   <div className={d.header_add_img_logo} > 
                    <input type="file"  onChange={addFile }/>   <FontAwesomeIcon icon="camera" /> </div>} 
               </div>

               <div className={d.header_title_name}>
                <h1 className={d.name}>{fullName === undefined ? undefined : fullName}</h1> 
                <span className={d.add_biography} title="в разработке">  <Status status={status} statusСhangedSuccess={statusСhangedSuccess}/> </span>
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