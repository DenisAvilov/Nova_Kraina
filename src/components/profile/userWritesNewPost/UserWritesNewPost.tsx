import * as React from 'react';
import d from './UserWritesNewPost.module.css';
import { yourField } from '../../renderField/renderField';
import { reduxForm, Field } from 'redux-form';
import { InitialStateType } from '../../../redux/profile-reduce';
import { PhotosType } from '../../../types/State_Profile_Reduce';
let textarea =  yourField("textarea"), input = yourField("input");

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

    return (
        <div className={d.new_news}>
            <div className={d.your_news}>
                <div className={d.your_user_logo}>
                {  props.photos === undefined ?  <img src="https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png" />  : <img src={props.photos.small === null ? "https://www.w3schools.com/w3css/img_avatar3.png" : props.photos.small} />   }
                   
                </div>
                <FormPost onSubmit={props.onSubmit}/>               
            </div>
        </div>
    )
}

export default UserWritesNewPost;