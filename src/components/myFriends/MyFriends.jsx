import React from 'react'
import d from './MyFriends.module.css'
import User from '../profile/user/User'
import Friend from './friend/Friend'

const MyFriends = (props)=>{

 let friend = props.myfriends.users.map(f => 
 <Friend key={f.id} name={f.name} sername={f.serName}  id={f.id} /> )

    return(
        <div className={d.wraper}>
                  {/* <User  user={props.users.user}/> */}
                    <div className={d.friends_wrap}>
                         {friend} 
                    </div>                    
           
        </div>
    )
}

export default MyFriends;
