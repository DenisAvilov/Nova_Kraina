import React from 'react'
import d from './Friend.module.css'
import { NavLink } from 'react-router-dom';


const Friend = (props)=>{

    return(               
                    <div className={d.friends_wrap}>                        
                            <div className={d.friend}>
                                <div className={d.logo}>
                                   <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt=""/>                      
                                </div>
                                <div className={d.user_name}>
    <h2>{props.name} {props.sername} </h2>
                                    <span className={d.common_frien}><span>165</span>Общих друзей</span>
                                </div>
                                <div type="sobmit"  className={d.button_friends}>Друзья</div>
                            </div>                        
                    </div>
            
      
    )
}

export default Friend;
