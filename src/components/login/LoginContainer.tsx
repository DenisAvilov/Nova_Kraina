
import * as React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { is_login } from '../../redux/general';
import { RootReducerType } from '../../redux/store-redux';


type PropsType = {   
    isYou: boolean | null    
}
type DistpathType = {
    is_login: (email:string, password:string, remember_my:boolean, captcha: string ) => void   
}
type OwnStateType = {}
type OllPropsType = PropsType & DistpathType & OwnStateType

class LoginContainer extends React.Component<OllPropsType>{

 

    submit = (values: { email: string; password: string; remember_my: boolean; captcha: string}) => {
       let  {is_login} = this.props
        is_login(values.email, values.password, values.remember_my, values.captcha)       
      }
       
    render(){
        return(<Login onSubmit={this.submit} isYou={this.props.isYou}/>
        )
    }
}

let mapStateToProps = (state: RootReducerType) : PropsType=> {
    return{
        isYou: state.general.isYou
    }    
}

export default connect<PropsType, DistpathType, OwnStateType, RootReducerType>( mapStateToProps, {is_login})(LoginContainer)



