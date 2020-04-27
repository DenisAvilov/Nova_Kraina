import React from 'react';
import Profile from './Profile';
import {  addPost, setUsers } from '../../redux/profile-reduce';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUser, getGeneral } from '../../redux/selector-redux';

class ProfileConteiner extends React.Component {

    componentDidMount() {

        this.props.setUsers(this.props.match.params.userId, this.props.general.id)

    }

    submit = values => {       
         this.props.addPost(values)
          values.writeNewPost = " "
      }


    render() {
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

let mapStateToProps = (state) => ({
    profile: getUser(state),
    brief: getUser(state).briefInformation,
    placeholder: getUser(state).placeholder,        
    user: getUser(state).profile,
    general: getGeneral(state)
})

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {  addPost, setUsers })
)(ProfileConteiner)


