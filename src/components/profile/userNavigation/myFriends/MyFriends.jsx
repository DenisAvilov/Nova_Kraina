import React from 'react'
import d from './MyFriends.module.css'
import User from '../../user/User'
import Friend from './friend/Friend'

const MyFriends = (props)=>{

let friend = props.myfriends.user.map(f => <Friend name={f.name} sername={f.serName}/>    )

    return(
        <div className={d.wraper}>
                  <User  user={props.user.user}/>
                    <div className={d.friends_wrap}>
                          {friend}                
                    </div> 
                    
            Мои друзья еще не все здесь отмечены
        </div>
    )
}

export default MyFriends;
