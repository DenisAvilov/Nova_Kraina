import React from 'react';
import d from './Header.module.css';
import Gumburger from './gumburger/Gumburger';



const Header = () => {
    return (
        <div className={d.header}>           
            <Gumburger /> 
        </div>
    );
};

export default Header;