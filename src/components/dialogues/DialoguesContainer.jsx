import React from 'react';
import { connect } from 'react-redux';
import Dialogues from './Dialogues';
import { withAuthRedirect } from '../hoc/withAuthRedirect';



class DialoguesContainer extends React.Component{
  
    render(){
       
       return (
        <Dialogues
             loginRedidect={this.props.loginRedidect}
        /> 
       )
       }
 
}
// HOC чистыя функция высшего порядка
// let WrapComponent = (props) => {

//     if(!props.loginRedidect ) return  <Redirect to={{ pathname: "/Login" }}/> 

//     return <DialoguesContainer {...props} />

// }

let HocWrapComponent = withAuthRedirect(DialoguesContainer)



let mapStateToProps = (store) =>{
    return{
     loginRedidect: store.general.isYou 
    }
}


export default connect(mapStateToProps, {} ) (HocWrapComponent);