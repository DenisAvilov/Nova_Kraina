import React from 'react';
import d from './UserWritesNewPost.module.css';


const UserWritesNewPost = (props) => {
    
  let newTextUser = React.createRef();  
  let ckickButton = ()=>{  
    
     //props.addPost()    
     props.dispatch({ type : 'ADD-POST'})  
    }
  let changePlaceholder = () => {
 
     let text = newTextUser.current.value;
     let action = {type : 'ADD-NEW-PLACE-HOLDER', text: text};
     props.dispatch(action);
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
                <input onClick={ () => { ckickButton() } } type="submit" />
            </div>
        </div>       </div>
    )
}

export default UserWritesNewPost;