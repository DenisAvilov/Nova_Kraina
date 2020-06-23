import * as React from 'react';
import d from './UserWritesNewPost.module.css';
import { renderField } from '../../renderField/renderField';
import { reduxForm, Field } from 'redux-form';
import { InitialStateType } from '../../../redux/profile-reduce';
import { PhotosType, PostType } from '../../../types/State_Profile_Reduce';
import { UserProfileFoto } from '../user/User';
import NewPost from '../newpost/Newpost';
let textarea =  renderField("textarea"), input = renderField("input");

type FormForNewPostType = {
    handleSubmit: any   
    
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
   
    photos: PhotosType | undefined
    onSubmit: any
  
   }

const UserWritesNewPost: React.FC<UserWritesNewPostType> = (props: UserWritesNewPostType) => { 
let {photos} = props
    return (
        <div className={d.new_news}>
            <div className={d.your_news}>
                <div className={d.your_user_logo}>
               { UserProfileFoto( photos, "small" )}
                </div>
                <FormPost onSubmit={props.onSubmit}/>               
            </div>
           
        </div>
    )
}

export default UserWritesNewPost;