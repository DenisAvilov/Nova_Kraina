import React from 'react';
import d from './User.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const User = (props) => {
    // const props = {
    //     user_Name: 'Илья',
    //     user_Second_Name: 'Авилов',
    //     bg_logo: "https://www.dswiss.com/assets/components/phpthumbof/cache/Office_PC1.27be4b79db61149d2ae0a950ea0d216f.jpg",
    //     get bg_logo_alt(){
    //         return this.user_Name + " " + this.user_Second_Name;
    //     } ,
    //     user_avatar: "http://avilovdenis.pp.ua/img/2-mini-min.png",
    //     get user_avtar_alt() 
    //         {
    //             return this.user_Name + " " + this.user_Second_Name;                
    //         },
    // }    
    return (
        <div className={d.header}>
            <div className={d.header_bg_logo}>                
                <img src={props.user[0].bg_logo} alt={props.user[0].bg_logo_alt} />
            </div>
            <div className={d.header_logo_wrap}>
                <div className={d.header_logo}>
                    <img src={props.user[0].user_avatar} alt={props.user[0].user_avtar_alt} />
                </div>
                <div className={d.header_logo_download}>
                    <FontAwesomeIcon icon="camera" />
                </div>
                <h1 className={d.name}>{props.user[0].name} {props.user[0].second_Name}</h1>
                <span className={d.add_biography} title="в разработке">Добавить информацию</span>
            </div>
        </div>
    )
}
export default User;