import * as React from 'react';
import d from './Friends.module.css';
import { NavLink } from 'react-router-dom';
 import { ItemsType } from '../../redux/friends-reduce';

type FriendsType ={
  user: ItemsType
  usersTracking: Array<number>  | Array<string>
  emailUser: string | null
  friendUnFollow: (userID: number) => void
  friendFollow: (userID: number) => void  
}
const Friend: React.FC<FriendsType> = (props: FriendsType) => {
  
  let {user,  usersTracking, friendUnFollow, friendFollow, emailUser} = props
  return (
    <div className={d.wrap}>     
        <div className={d.friend_wrap}>
          <div className={d.logo}>
      <NavLink to={ 'profile/' + user.id}>   <img src={user.photos.small === null ? "https://www.w3schools.com/w3css/img_avatar3.png" : user.photos.small} /> </NavLink>
          </div>       
          <h1 className={d.user_name}>  {user.name} </h1>
          <div className={d.status}>
            {user.followed
              ? <button disabled={usersTracking.some((id:boolean | string | number) => id == user.id)} onClick={() => { friendUnFollow(user.id)} 
              }>
                <span>Удалить из друзей</span>
              </button>
              : <button disabled={usersTracking.some((id:boolean | string | number) => id == user.id)} onClick={() => { friendFollow(user.id)}}> 
              Добавить в друзья </button>
            }
          </div>

        </div>

     
    </div>
  )
}

export default Friend; 

