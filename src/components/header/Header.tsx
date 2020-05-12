import * as React from 'react';
import d from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';

type HeaderType = {
    isYou: boolean | null
    login: string | number | null
    is_logOut: () => void
}
const Header: React.FC<HeaderType> = (props: HeaderType) => {
  
    return (
        <div className={d.wrap}>

         <div className={d.wrap_left}>left</div>
         <div className={d.wrap_center}>center</div>
         <div className={d.wrap_right}>
     
         {props.isYou?  <div> <h2>{props.login}</h2> <span onClick={ () => props.is_logOut() } className={d.logout}> Выйти </span> </div> : <Link to="/login"> Войти </Link> } 
         </div>
        
            
       </div>
    )
}

export default Header;