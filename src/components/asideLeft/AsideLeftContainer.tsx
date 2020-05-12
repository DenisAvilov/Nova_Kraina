import React from 'react';
import { connect } from 'react-redux';
import AsideLeft from './AsideLeft';
import { RootReducerType } from '../../redux/store-redux';
import { GeneralType } from '../../types/State_General_Reduce';

type ContainerPropsType = {

    user: GeneralType
}

class AsideLeftContainer extends React.Component<ContainerPropsType>{


    render(){
        return(
            <AsideLeft user={this.props.user}/>
        )
    }

}
let  mapStateToProps = (store: RootReducerType) : ContainerPropsType=>{

    return{
        user: store.general
    }
}


export default   connect( mapStateToProps , {})(AsideLeftContainer)
