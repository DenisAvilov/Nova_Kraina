//Don’t Repeat Yourself (DRY)
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootReducerType } from '../../redux/store-redux';
// берем нужные данные в store для выполнения условия
let withMapStateToProps = (store: RootReducerType) => {
    return{
        loginRedidect: store.general.isYou
    }
} 
type MyProps = ReturnType< typeof withMapStateToProps>
export const withAuthRedirect = (HocComponent: React.ComponentType) => {

    //  Оборачиваем контейнером WrapperContainer входящюю HocComponent компоненту 
    class  WrapperContainer extends React.Component<MyProps>{
         render(){
             // если пользователь не залогиненый перенаправим на страницу регистрации
            if(!this.props.loginRedidect ) return  <Redirect to={{ pathname: "/Login" }}/>   
             // если пользователь залогиненый вернем запрашиваемую компоненту
            return <HocComponent {...this.props} />
        }    
    }
 
    // Передаем  state в WrapperContainer через функцию вышего порядка connect 
     let ConnectAuthRedirectContainer = connect( withMapStateToProps, {} )( WrapperContainer );
    // Возвращаем результат который вернул connect   
     return  ConnectAuthRedirectContainer;   
     
}

