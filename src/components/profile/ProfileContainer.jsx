import React from 'react';
import Profile from './Profile';
import {  addPost, setUsers } from '../../redux/profile-reduce';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

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
    profile: state,
    general: state.general    
    
})

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {  addPost, setUsers })
)(ProfileConteiner)


