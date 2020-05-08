import * as React from 'react';
// import React from 'react';
import d from './User.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
    user?: any;
  }

const User: React.SFC<IProps> = (props: IProps) => {

    return (
        <div className={d.header}>           
                <div className={d.header_bg_logo}>                
                      {  props.user ?  <img src="https://bestinstrumentalever.com/wp-content/uploads/2018/03/call-of-freedom.jpg" />  : <img src={props.user.photos.large} />   }
                </div>     
            <div className={d.header_logo_wrap}>
                <div className={d.header_logo}>
                {  props.user ?  <img src="https://www.w3schools.com/w3css/img_avatar3.png" />  : <img src={props.user.photos.small} />   }
                  
                </div>
                <div className={d.header_logo_download}>
                    <FontAwesomeIcon icon="camera" />
                </div>
                <h1 className={d.name}>{props.user ? undefined : props.user.userId.fullName}</h1> 
                <span className={d.add_biography} title="в разработке">Добавить информацию</span>
            </div>
        </div>
    )
}

User.defaultProps = {
    user: '' ,
  };

export default User;


