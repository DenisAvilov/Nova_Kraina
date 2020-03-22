import React from 'react';
import d from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   
    return (
        <div className={d.wrap}>

         <div className={d.wrap_left}>left</div>
         <div className={d.wrap_center}>center</div>
         <div className={d.wrap_right}>
         {props.isOpen? <div></div>: <div></div>}
         {props.isYou? <p>{props.login}</p> : 'Войти' } 
         </div>
         
            
       </div>
    )
}

export default Header;