import * as React from 'react';
import d from './UserWritesNewPost.module.css';
import { yourField } from '../../renderField/renderField';
import { reduxForm, Field } from 'redux-form';
let textarea =  yourField("textarea"), input = yourField("input");

type FormForNewPostType = {
    handleSubmit: any;    
}

const FormForNewPost: React.FC<FormForNewPostType> = (props: FormForNewPostType) => {

    const { handleSubmit } = props; 

    return(
        <form onSubmit={handleSubmit} className={d.write_news}>
        <Field component={textarea} name="writeNewPost" type="text" cols="10" rows="1" ></Field>
        <button type="submit" > Опубликовать </button>
    </form>
    )

}
 
let FormPost = reduxForm(
    { form: "formNewPost"}
)(FormForNewPost)

type UserWritesNewPostType = {
     
    user:  PostType
    onSubmit: () => void
    
   }

const UserWritesNewPost: React.FC<UserWritesNewPostType> = (props: UserWritesNewPostType) => { 

    return (
        <div className={d.new_news}>
            <div className={d.your_news}>
                <div className={d.your_user_logo}>
                {  props.user ?  <img src="https://www.w3schools.com/w3css/img_avatar3.png" />  : <img src={props.user} />   }
                   
                </div>
                <FormPost onSubmit={props.onSubmit}/>               
            </div>
        </div>
    )
}

export default UserWritesNewPost;