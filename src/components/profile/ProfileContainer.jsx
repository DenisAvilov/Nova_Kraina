import React from 'react';
import Profile from './Profile';
import { addPlacholder, addPost, setUsers } from '../../redux/profile-reduce';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileConteiner extends React.Component {

    componentDidMount() {
        this.props.setUsers(this.props.match.params.userId, this.props.general.id)
    }

    render() {
        return (
            <>
                <Profile
                    {...this.props}
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
    connect(mapStateToProps, { addPlacholder, addPost, setUsers })
)(ProfileConteiner)

// let WithAuthRedirect = withAuthRedirect(ProfileConteiner) 
// export default connect( mapStateToProps, {addPlacholder, addPost, setUsers } ) ( withRouter(WithAuthRedirect) )
