
import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { is_login } from '../../redux/general';

class LoginContainer extends React.Component{


    submit = values => {
        this.props.is_login(values.email, values.password, values.remember_my)
        console.log(values)
      }
      
    render(){
        return(<Login onSubmit={this.submit} redireckInProfile={this.props.isYou}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        isYou: state.general.isYou
    }    
}
   
export default connect( mapStateToProps, {is_login})(LoginContainer)



