import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { is_close, is_open, getUsersData } from '../../redux/general';

class HeaderContainer extends React.Component {

     componentDidMount(){
       this.props.getUsersData()     
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

export default connect( setState, {  is_close, is_open, getUsersData })(HeaderContainer);
