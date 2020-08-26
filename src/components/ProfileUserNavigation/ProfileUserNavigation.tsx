import React from 'react'
import d from './ProfileUserNavigation.module.css'
import { Link, useRouteMatch, useParams } from 'react-router-dom'
import { match } from 'assert'
type PropsType = {
     emailUser: string | null 
     totalCountFriend: number 
}

const ProfileUserNavigation: React.FC<PropsType> = ({totalCountFriend}:PropsType) => {
  let match = useRouteMatch()
  let { url } = useRouteMatch();
  let { userId } : any = useParams();

        
 
    return (
        <div className={d.nav}>
            <div className={d.nav_info}>
                <Link to={`${url}`} >Хроника</Link>
                <Link to={`${url}/about`} >Информация</Link>
                <Link to={`${url}/friends`} >Друзья {totalCountFriend} </Link>
               {/* <Link to={`${url}/fotos`} >Фото</Link>  */}
            </div>            
            <div className={d.nav_edit_profile}>Редоктировать проф...</div>
        </div>
    )
}
export default ProfileUserNavigation;

// activeStyle={{backgroundColor: "rgb(46, 46, 46)"}}































// let  {emailUser} = props 
//   let match = useRouteMatch();