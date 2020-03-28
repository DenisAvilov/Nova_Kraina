import React from 'react';
import { connect } from 'react-redux';
import AsideLeft from './AsideLeft';
import { usersApi } from '../../api/Api';


class AsideLeftContainer extends React.Component{


    render(){
        return(
            <AsideLeft user={this.props.user}/>
        )
    }

}
let  mapStateToProps = (store) =>{

    return{
        user: store.general
    }
}


export default   connect( mapStateToProps , {})(AsideLeftContainer)
