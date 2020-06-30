import * as React from 'react'
import { RootReducerType } from '../../redux/store-redux'
import { connect } from 'react-redux'
import { ProfileType, BriefType } from '../../types/State_Profile_Reduce'
import { About } from './About'
import { getBrief } from '../../redux/selector-redux'
import { putProfileData } from '../../redux/profile-reduce'


type OwnStateProps = { 
    isMyPage: boolean | null

 }

type PropsType = {
    aboutDetail: ProfileType
    brief: BriefType
   
    
}
type DispathPropsType = {
    putProfileData: (values: ProfileType) => void
  
   
}
type AboutType =  PropsType & DispathPropsType & OwnStateProps
class AboutContainer extends React.Component<AboutType, OwnStateProps>{
 
 

    render() {    
         
        return(           
           
               <About aboutDetail={this.props.aboutDetail} brief={this.props.brief}  isMyPage={this.props.isMyPage} putProfileData={this.props.putProfileData}/>
            
        )
    }  
}

let mapStateToProps = (state: RootReducerType): PropsType  => {
   
    return {        
        aboutDetail: state.profile.profile,
        brief: getBrief(state)
       
    }
}

export default connect( mapStateToProps, {putProfileData} )(AboutContainer)