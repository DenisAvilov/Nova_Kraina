import React from 'react';
import Profile from './Profile';
import {  addPost, setUsers } from '../../redux/profile-reduce';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import {getUser, getGeneral, getPost, getBrief, getPlaceholder } from '../../redux/selector-redux';


class ProfileConteiner extends React.Component {

    componentDidMount() {

        this.props.setUsers(this.props.match.params.userId, this.props.general.id)
      
     
           
        
    }

    submit = values => {       
         this.props.addPost(values)
          values.writeNewPost = " "
      }


    render() {
        console.log("render()")
        return (
            <>
                <Profile
                    {...this.props}
                    onSubmit={this.submit}
                />
            </>
        )
    }
}




let mapStateToProps = (state) => {
    console.log("mapStateToProps()")
    debugger
        return {
           // test: state.profile,
            //state.profile.post
            post: state.profile.post,
            // post: getPost(state),
            //state.profile.briefInformation
            brief: state.profile.briefInformation,
            //state.profile.placeholder
            placeholder: state.profile.placeholder,  
            // state.profile.profile     
            user: state.profile,
            //state.general
            general: getGeneral(state)
            
}}

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {  addPost, setUsers })
)(ProfileConteiner)


