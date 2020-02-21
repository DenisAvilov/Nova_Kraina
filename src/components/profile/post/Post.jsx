import React from 'react';
import d from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = (props) => {
    
    return (
        <div className={d.post}>
            <div className={d.post_title}>
                <div className={d.post_logo}><img src={props.avatarImg} alt="logo" /> </div>
    <span className={d.post_user_name}>{props.name} {props.secondName}</span>
            </div>
            <div className={d.post_content}>
                <span className={d.post_content_title}>{props.title}</span>
                <a href="#">
                    <figure>
                        <img src={props.imgPost} alt="" />
                    </figure>
                    <span className={d.post_content_text}>{props.massenge}</span>
                </a>
    <div className={d.post_content_like}>  <span><FontAwesomeIcon icon='thumbs-up' /> Нравится {props.like}</span></div>
            </div>
        </div>
    )
}

export default Post; 