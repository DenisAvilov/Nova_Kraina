import React from 'react';
import d from './UserWritesNewPost.module.css';


const UserWritesNewPost = () => {
    return (
    <div className={d.new_news}>
        <div className={d.your_news}>
            <div className={d.your_user_logo}>
                <img src="http://avilovdenis.pp.ua/img/2-mini-min.png" alt="Avatar" />
            </div>
            <div className={d.write_news}>
                <textarea name="your_new_news" id="your_new_news" cols="10" rows="1"></textarea>
                <input type="submit" />
            </div>
        </div>       </div>
    )
}

export default UserWritesNewPost;