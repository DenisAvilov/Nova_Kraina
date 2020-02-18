import React from 'react';
import d from './Profile.module.css';
import Posts from './posts/Posts';
import Avatar from './avatar/Avatar';
import WhatNews from './whatNews/WhatNews';

const Profile = () => {
    const postsData = [
        { id: '0', messend: 'Привет таинственный друг' },
        { id: '1', messend: 'Неожидал встретить тебя в этом месте' },
        { id: '2', messend: 'Неожидал встретить тs этом месте', }
    ];

    const postItem = postsData.map(mesend => (<Posts id={mesend.id} messend={mesend.messend} />));


    return (
        <div className={d.profileWrap}>
            <figure>
                <img src="https://www.legalwork.in.ua/assets/img/slider/1.jpg" alt="" />
            </figure>
            <Avatar />
            <WhatNews />

            {postItem}
            {/* <Posts messend="Привет таинственный друг"/>
           <Posts messend="Неожидал встретить тебя в этом месте"/>          
           <Posts messend="Неожидал встретить тs этом месте"/>         */}
        </div>
    )
}

export default Profile;