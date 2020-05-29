import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { PostType } from '../../../types/State_Profile_Reduce';
import d from './Newpost.module.css';


type PropsType = {    
 post: Array<PostType>  
}


const NewPost: React.FC<PropsType> = (props: PropsType) =>{

return(  
    <>
    { props.post.map(p => 
    <div className={d.post}  key={p.id} >  
            <div className={d.post_title}>          
                   <div className={d.post_logo}>                 
                     <img src={p.avatarImg === null ? "https://www.w3schools.com/w3css/img_avatar3.png" : p.avatarImg}/>   
                    
             </div>
    <span className={d.post_user_name}>{p.name} </span>
            </div>
            <div className={d.post_content}>
                <span className={d.post_content_title}>{p.title}</span>
                <a href="#fake">
                    <figure>
                         <img src={p.imgPost === null ? "https://media.proglib.io/posts/2020/01/19/740ca305bf19a984150dc94085a1cb28.png" : p.imgPost}  /> 
                      
                    </figure>
                    <span className={d.post_content_text}>{p.massenge}</span>
                </a>
    <div className={d.post_content_like}>  <span><FontAwesomeIcon icon='thumbs-up' /> Нравится {p.like}</span></div>
   
            </div>
        </div>
        )
    }    
      </> 
)
}

export default NewPost;