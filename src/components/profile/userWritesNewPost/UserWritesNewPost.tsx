import * as React from 'react'
import d from './UserWritesNewPost.module.css'
import { renderField } from '../../common/renderField'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { PhotosType } from '../../../types/State_Profile_Reduce'
import PhotoUser from '../../asideLeft/PhotoUser'
import { WriteNewPostType } from '../ProfileContainer'
let textarea =  renderField("textarea"), input = renderField("input")

const FormForNewPost: React.FC<InjectedFormProps<WriteNewPostType, UserWritesNewPostType> & UserWritesNewPostType> = (props) => {

    const { handleSubmit } = props; 

    return(
        <form onSubmit={handleSubmit} className={d.write_news}>
        <Field component={textarea} name="writeNewPost" type="text" cols="10" rows="1" ></Field>
        <button type="submit" > Опубликовать </button>
    </form>  
    )

}
 
let FormPost = reduxForm<WriteNewPostType, any>(  { form: "formNewPost"} )(FormForNewPost)

const UserWritesNewPost: React.FC<UserWritesNewPostType> = (props) => { 
let {photo} = props
    return (
        <div className={d.new_news}>
            <div className={d.your_news}>
                <div className={d.your_user_logo}> 
                 <PhotoUser  photo={photo}/>  </div>             
                 <FormPost onSubmit={props.onSubmit}/>               
            </div>
           
        </div>
    )
}

export default UserWritesNewPost;




type UserWritesNewPostType = {  
    onSubmit: any
    photo: PhotosType | undefined    }
