import React from 'react';
import d from './UserWritesNewPost.module.css';
import { yourField } from '../../renderField/renderField';
import { reduxForm, Field } from 'redux-form';
let textarea =  yourField("textarea"), input = yourField("input");

const FormForNewPost = (props) => {

    const { handleSubmit } = props; 

    return(
        <form onSubmit={handleSubmit} className={d.write_news}>
        <Field component={textarea} name="writeNewPost" type="text" cols="10" rows="1"  label={props.placeholder}></Field>
        <button type="submit" > Опубликовать </button>
    </form>
    )

}
 
let FormPost = reduxForm(
    { form: "formNewPost"}
)(FormForNewPost)

const UserWritesNewPost = (props) => { 

    return (
        <div className={d.new_news}>
            <div className={d.your_news}>
                <div className={d.your_user_logo}>
                {  props.user.photos.small === null ?  <img src="https://www.w3schools.com/w3css/img_avatar3.png" />  : <img src={props.user.photos.small} />   }
                   
                </div>
                <FormPost onSubmit={props.onSubmit} placeholder={props.placeholder}/>               
            </div>
        </div>
    )
}

export default UserWritesNewPost;