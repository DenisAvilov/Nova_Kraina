
import * as React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { is_login } from '../../redux/general';
import { RootReducerType } from '../../redux/store-redux';


type PropsType = {   
    isYou: boolean | null 
    captcha: string | null
    
}
type DistpathType = {
    is_login: (email: string,  password: string,  remember_my: boolean, captcha: string | null) => void   
}
//Заглушка в каптче так как она должна приходить из пропрос а не из локального стейта
type OwnStateType = {
    
}
type OllPropsType = PropsType & DistpathType & OwnStateType

export type LoginFormValuesType = {
    email: string;
    password: string;
    remember_my: boolean;
    captcha: string | null
}

class LoginContainer extends React.Component<OllPropsType>{   

    submit = (values:LoginFormValuesType) => {
               let  {is_login} = this.props
        is_login(values.email, values.password, values.remember_my, values.captcha)   
      }
       
    render(){        
        return(<Login onSubmit={this.submit} isYou={this.props.isYou} captcha={this.props.captcha}/>
        )
    }
}

let mapStateToProps = (state: RootReducerType) : PropsType=> {
 
    return{
        isYou: state.general.isYou,
        captcha: state.general.captcha

    }    
}

export default connect<PropsType, DistpathType, OwnStateType, RootReducerType>( mapStateToProps, {is_login})(LoginContainer)



