import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { to_came_in, is_close, is_open } from '../../redux/general';
import * as axios from 'axios';


class HeaderContainer extends React.Component {


     componentDidMount(){
       
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
  //передпем настройки запроса на получение cookie 
              withCredentials: true
        })
        .then( (response) => {
            if(response.data.resultCode === 0){
            this.props.to_came_in(
                response.data.data
                )
            }
        } )
     }
    


    render(){
     
        return (
           <Header 
           {...this.props}
           isYou={this.props.isYou}
           login={this.props.login}
           is_open={this.props.is_open}
           is_close={this.props.is_close}
           />
        )
    }
}


let setState = (store) => {
    
    return{
     data: store.general,
     isYou: store.general.isYou,
     login: store.general.login
    }

}

export default connect( setState, { to_came_in, is_close, is_open })(HeaderContainer);
