import * as React from 'react';
import d from './Header.module.css';
import { Link } from 'react-router-dom';
import { HeaderType } from '../../types/Header_type';


const Header: React.FC<HeaderType> = (props: HeaderType) => {
    let { is_logOut, login, isYou } = props

    return (
        <div className={d.wrap}>
            <div className={d.wrap_left}>left</div>
            <div className={d.wrap_center}>center</div>
            <div className={d.wrap_right}>
                {isYou ? <div> <h2>{login}</h2> <span onClick={() => is_logOut()} className={d.logout}> Выйти </span> </div> : <Link to="/login"> Войти </Link>}
            </div>
        </div>
    )
}

export default Header;