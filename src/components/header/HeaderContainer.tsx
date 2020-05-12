import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { is_logOut } from '../../redux/general';
import { RootReducerType } from '../../redux/store-redux';




type MapPropsType = {
     isYou: boolean | null
     login: string | number | null  
}

type TOwnProps = {}

type DistpachPropsType = {    
    is_logOut: () => void
}

type OwnPropsType = MapPropsType & DistpachPropsType 

class HeaderContainer extends React.Component<OwnPropsType> {  

    render(){     
        return (
           <Header         
           isYou={this.props.isYou}
           login={this.props.login}      

           is_logOut={this.props.is_logOut}
           />
        )
    }
}

let mapStateToProps = (store: RootReducerType) : MapPropsType => {    
    return{     
     isYou: store.general.isYou,
     login: store.general.login
    }
}
//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
export default connect<MapPropsType, DistpachPropsType, TOwnProps, RootReducerType>( mapStateToProps, { is_logOut })(HeaderContainer);

