import * as React from 'react'
import { RootReducerType } from '../../redux/store-redux'
import { connect } from 'react-redux'
import { ProfileType } from '../../types/State_Profile_Reduce'
import { About } from './About'



type StateType = { 
  
}

type PropsType = {
    aboutDetail: ProfileType
}

type DispathPropsType = {

}

type AboutType =  PropsType & DispathPropsType

class AboutContainer extends React.Component<AboutType, StateType>{  

    render() {       
        return(
            <About aboutDetail={this.props.aboutDetail}/>
        )
    }  
}

let mapStateToProps = (state: RootReducerType): PropsType  => {
   
    return {        
        aboutDetail: state.profile.profile
    }
}

export default connect( mapStateToProps, {} )(AboutContainer)