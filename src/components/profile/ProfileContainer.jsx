import React from 'react';
import Profile from './Profile';
import { addPlacholder, addPost, setUser } from '../../redux/profile-reduce';
import { connect } from 'react-redux';
import * as  axios from 'axios';
import { withRouter } from 'react-router-dom';
import general, { to_came_in } from '../../redux/general';
import { usersApi } from '../../api/Api';



class ProfileConteiner extends React.Component{
    
    componentDidMount(){
       
           let userProfileId = this.props.match.params.userId; 
         if(!userProfileId ){         
                userProfileId = this.props.general.id 
            } 
          usersApi.profile(userProfileId)
        .then( (response)=>{  
             this.props.setUser(response.data)  
        } )

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

export default connect( mapStateToProps, {addPlacholder, addPost, setUser})(withRouter(ProfileConteiner))
 