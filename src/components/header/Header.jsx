import React from 'react';
import d from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';

const Header = (props) => {
  
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