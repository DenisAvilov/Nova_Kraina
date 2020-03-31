import React from 'react';
import d from './Friends.module.css';
import { NavLink } from 'react-router-dom';


const Friends = (props) => {

  return (

    <div className={d.wrap}>
      {props.friends.map(user =>
        <div className={d.friend_wrap}>
          <div className={d.logo}>
            <NavLink to={/Profile/ + user.id}>   {user.photos.small ? <img src={user.photos.small} alt="Фото Юзера" /> : <img src="https://c7.uihere.com/files/110/26/463/stylish-black-and-white-icon-human-brain-vector.jpg" alt="Нет фото" />} </NavLink>
          </div>

          <h1 className={d.user_name}>  {user.name} </h1>
          <div className={d.status}>
            {user.followed
              ? <button disabled={props.usersTracking.some(id => id == user.id)} onClick={() => { props.friendUnFollow(user.id) }
              }>
                <span>Удалить из друзей</span>
              </button>
              : <button disabled={props.usersTracking.some(id => id == user.id)} onClick={() => {
                // функция которая вызывает санки
                props.friendFollow(user.id)
              }}> Добавить в друзья </button>
            }
          </div>

        </div>

      )}
    </div>
  )
}

export default Friends; 