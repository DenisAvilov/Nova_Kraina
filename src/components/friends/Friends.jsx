import React from 'react';
import d from './Friends.module.css';
import { NavLink } from 'react-router-dom';
import { usersApi } from '../../api/Api';

  const Friends = (props) => {  

    return ( 

        <div className={d.wrap}> 
 {props.friends.map(user =>   
    <div className={d.friend_wrap}>   
        <div className={d.logo}>
         <NavLink to={/Profile/ + user.id}>   {user.photos.small ? <img  src={user.photos.small} alt="Фото Юзера"/> : <img  src="https://c7.uihere.com/files/110/26/463/stylish-black-and-white-icon-human-brain-vector.jpg" alt="Нет фото"/>} </NavLink>
        </div>

        <h1 className={d.user_name}>  {user.name} </h1>
        <div  className={d.status}> 
              {user.followed                          
                ?  <button  disabled={props.usersTracking.some(id => id == user.id)} onClick={ () => {
                  props.stateTrackingButton(user.id,  true)

                  usersApi.unfollow(user.id).then( (resultCode) => {
                  
                    if(resultCode === 0){  props.del_Friend(user.id) }

                    props.stateTrackingButton(user.id,  false)
                  } 
                   )} 
                   }>  
                         <span>Удалить из друзей</span> 
                  </button>  

                :  <button disabled={props.usersTracking.some(id => id == user.id)} onClick={ () => { 

                       props.stateTrackingButton(user.id,  true)
                    
                       usersApi.follow(user.id).then(    (resultCode) => {
                    
                      if(resultCode === 0){ props.add_Friend(user.id)   }
                      props.stateTrackingButton(user.id,  false)
                    }) 

                } }> Добавить в друзья </button> 
              }
         </div>

    </div>
             
 )}      
        </div>
    )
  }

export default Friends; 