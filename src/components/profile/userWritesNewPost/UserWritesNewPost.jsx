import React from 'react';
import d from './UserWritesNewPost.module.css';


const UserWritesNewPost = (props) => {
  
  let newTextUser = React.createRef();
  
  let addPost = ()=>{
     let text = newTextUser.current.value;
    
     props.addPost(text)
    newTextUser.current.value = '';
    }

    return (
    <div className={d.new_news}>
        <div className={d.your_news}>
            <div className={d.your_user_logo}>
                <img src="http://avilovdenis.pp.ua/img/2-mini-min.png" alt="Avatar" />
            </div>
            <div className={d.write_news}>
                <textarea  ref={newTextUser} cols="10" rows="1"></textarea>
                <input onClick={ () => { addPost() } } type="submit" />
            </div>
        </div>       </div>
    )
}

export default UserWritesNewPost;