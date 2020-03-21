import React from 'react';
import d from './UserWritesNewPost.module.css';



const UserWritesNewPost = (props) => {

    let newTextUser = React.createRef();
    let onAddPost = () => {
        //props.addPost()  
        props.addPost();  
        // props.dispatch(actionAddPost())
    }

    let changePlaceholder = () => {
        let text = newTextUser.current.value;
        props.addPlacholder(text)
        // props.dispatch(actionPlacholder(text));
    }

    return (
        <div className={d.new_news}>
            <div className={d.your_news}>
                <div className={d.your_user_logo}>
                    <img src="http://avilovdenis.pp.ua/img/2-mini-min.png" alt="Avatar" />
                </div>
                <div className={d.write_news}>
                    <textarea onChange={changePlaceholder} ref={newTextUser} cols="10" rows="1"
                        value={props.placeholder}></textarea>
                    <input onClick={ onAddPost} type="submit" />
                </div>
            </div>
        </div>
    )
}

export default UserWritesNewPost;