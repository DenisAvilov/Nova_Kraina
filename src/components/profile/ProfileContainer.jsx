import React from 'react';
import Profile from './Profile';
import { addPlacholder, addPost,  setUsers } from '../../redux/profile-reduce';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';




class ProfileConteiner extends React.Component{
    
    componentDidMount(){  

      this.props.setUsers(this.props.match.params.userId, this.props.general.id ) 

     }

    render(){   
     return(
         <>
        <Profile
         { ...this.props }

        //   wrappedComponentRef={c => (this.Profile = c)}                
        />
      
     </>
     ) 
    }
}



let  mapStateToProps = (state) => ( { 
     profile: state,
     general: state.general
    
    } )

export default connect( mapStateToProps, {addPlacholder, addPost, setUsers } ) ( withRouter(ProfileConteiner) )
 