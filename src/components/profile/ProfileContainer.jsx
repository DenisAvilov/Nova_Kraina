import React from 'react';
import Profile from './Profile';
import { addPlacholder, addPost, setUser } from '../../redux/profile-reduce';
import { connect } from 'react-redux';
import * as  axios from 'axios';
import { withRouter } from 'react-router-dom';
import general, { to_came_in } from '../../redux/general';

class ProfileConteiner extends React.Component{
    
    componentDidMount(){
       debugger
           let userProfileId = this.props.match.params.userId; 

         if(!userProfileId ){         
                userProfileId = this.props.general.id 
            } 
           
          
          
    

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userProfileId)
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
 