import * as React from 'react';
import d from '../friends/Friends.module.css';
import f from './FriendFollow.module.scss';
import {  ItemsType } from '../../redux/friends-reduce';
import { NavLink } from 'react-router-dom';

const FriendFollow: React.FC<FriendsType> = (props) => {

let {friendData, usersTracking,  friendUnFollow } = props

  return (
    <div  className={f.wrapGrid}>      
      {friendData.map( (friend: ItemsType) => <Friend key={friend.id} user={friend} usersTracking={usersTracking} 
      friendUnFollow={friendUnFollow} 
      /> )}
    </div>
  )
}
export default FriendFollow; 


const Friend: React.FC<FriendType> = (props) => {  
 
  let {user, usersTracking, friendUnFollow} = props
  return (        
         <div className={f.friendWrapFlex}>
           <div className={d.logo}>
           <NavLink to={ 'profile/' + user.id}>   <img src={user.photos.small === null ? "https://www.w3schools.com/w3css/img_avatar3.png" : user.photos.small} /> </NavLink>
         </div>       
           <h1 className={d.user_name}>  {user.name} </h1>
           <div className={d.status}>
              {user.followed
               ? <button disabled={usersTracking.some((id:boolean | string | number) => id == user.id)} 
              onClick={() => { friendUnFollow(user.id)} 
               }>
                 <span>Удалить из друзей</span>
               </button>
               : <button disabled={usersTracking.some((id:boolean | string | number) => id == user.id)}> 
               Контакт удален </button>
             } 
           </div> 
         </div>    
  )
}


type FriendsType ={
 
  friendData: Array<ItemsType>  
  usersTracking: number[]  
  friendUnFollow: (user: number) => void
}


type FriendType ={ 
 
  user: ItemsType  
  usersTracking: number[]
 
  friendUnFollow: (user: number) => void
}