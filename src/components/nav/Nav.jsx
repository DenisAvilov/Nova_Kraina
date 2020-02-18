import React from 'react'
import d from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={d.navWrap}>
            <NavLink to="/profile">Профиль</NavLink>
            <NavLink to={"/dialogues"}>Диалоги</NavLink>
            <NavLink to="/groups">Группы</NavLink>
            <NavLink to="/videos">Видео</NavLink>
            <NavLink to={"/music"}>Музыка</NavLink>

        </nav>
    )
}

export default Nav;