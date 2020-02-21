import React from 'react';
import d from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = () => {
    return (
        <div className={d.post}>
            <div className={d.post_title}>
                <div className={d.post_logo}><img src="http://avilovdenis.pp.ua/img/2-mini-min.png" alt="logo" /> </div>
                <span className={d.post_user_name}>Никита Авилов</span>
            </div>
            <div className={d.post_content}>
                <span className={d.post_content_title}>Природа</span>
                <a href="#">
                    <figure>
                        <img src="https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg" alt="" />
                    </figure>
                    <span className={d.post_content_text}>Какой то текст в посте, Какой то текст в посте Какой то текст в посте Какой то текст в посте Какой то текст в посте</span>
                </a>
                <div className={d.post_content_like}>  <span><FontAwesomeIcon icon='thumbs-up' /> Нравится </span></div>
            </div>
        </div>
    )
}

export default Post; 