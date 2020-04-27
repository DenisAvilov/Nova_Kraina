import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getUsersData, is_logOut } from '../../redux/general';

class HeaderContainer extends React.Component {

    //  componentDidMount(){
    //   this.props.getUsersData()     
    //  }

    render(){     
        return (
           <Header 
           {...this.props}
           isYou={this.props.isYou}
           login={this.props.login}      

           is_logOut={this.props.is_logOut}
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

export default connect( setState, { is_logOut , getUsersData })(HeaderContainer);

