import React from 'react';
import d from './Avatar.module.css'

const Avatar = () => {


    return (
        <div className={d.profileAvatar}>
            <figure >
                <img src="http://avilovdenis.pp.ua/img/2-mini-min.png" alt="" />
            </figure>
            <ul>
                <li><span className={d.profileList}>Denis Avilov</span></li>
                <li><span className={d.profileList}>Гражданство:</span><a href="#" className={d.rofileItem}>Ukraine</a></li>
                <li><span className={d.profileList}>Громада:</span><a href="#" className={d.rofileItem}>Харьков</a></li>
                <li><span className={d.profileList}>Возраст:</span><a href="#" className={d.rofileItem}>35</a></li>
            </ul>
        </div>

    );
};

export default Avatar;