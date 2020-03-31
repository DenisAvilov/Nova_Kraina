
import React from 'react'
import { connect } from 'react-redux'

class LoginContainer extends React.Component{
    render(){
        return(<>

            </>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        login: state.general
    }    
}

export const  connect = ( mapStateToProps, {})(LoginContainer)