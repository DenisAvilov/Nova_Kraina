import React from 'react';
import { connect } from 'react-redux';
import AsideLeft from './AsideLeft';
import { RootReducerType } from '../../redux/store-redux';
import { GeneralType } from '../../types/State_General_Reduce';
import { emailUser } from '../../redux/selector-redux';

type ContainerPropsType = {
    emailUser: string | null
    user: GeneralType
}

class AsideLeftContainer extends React.Component<ContainerPropsType>{


    render(){   
        let {emailUser, user} = this.props     
        return(
            <AsideLeft user={user} emailUser={emailUser}/>
        )
    }

}
let  mapStateToProps = (store: RootReducerType) : ContainerPropsType=>{

    return{
        user: store.general,
        emailUser: emailUser(store)
    }
}


export default   connect( mapStateToProps , {})(AsideLeftContainer)
