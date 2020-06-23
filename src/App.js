import React from 'react';
import { BrowserRouter as Router, Route, withRouter, BrowserRouter, Switch} from "react-router-dom";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faUsers, faUserFriends, faDiagnoses, faFileVideo, faMusic, faCamera, faGraduationCap, faHome, faMapMarker, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import AsideRight from './components/asideRight/AsideRight';
import Main from './components/main/Main';
import ProfileConteiner from './components/profile/ProfileContainer';
import FriendsContainer from './components/friends/FriendsContainer';

import HeaderContainer from './components/header/HeaderContainer';
import AsideLeftContainer from './components/asideLeft/AsideLeftContainer';
import store from './redux/store-redux';
import LoginContainer from './components/login/LoginContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { is_initialization } from './redux/initialization-reduce';
import { emailUser } from './redux/selector-redux';

library.add(fab, faCheckSquare, faCoffee, faUsers, faUserFriends, faDiagnoses,
     faFileVideo, faMusic, faCamera, faGraduationCap, faHome, faMapMarker, faThumbsUp)

class App extends React.Component{ 
       componentDidMount(){   this.props.is_initialization()  
        

      //   if(userUrl.url.split('/')[1] != Number){
      //      debugger
      //    userUrl = userUrl.url.split('/')[1]
      //   }
    }  
  
  
 render(){
    
     let{initializationSeccess, emailUser , userUrl} = this.props
 

  if(!initializationSeccess) return <>LOADING</>
    return (<div className="grid" >

            <HeaderContainer />
            <AsideLeftContainer />
            <AsideRight />
            <Switch>
               <Route exact path='/'render={() => <Main />}/>  
               <Route exact path= {'/profile/:userId?'}  render={() => <ProfileConteiner  />} /> 
               <Route path='/login' render={() => < LoginContainer />} />
               <Route path='/friends' render={() => < FriendsContainer />} />                       
            </Switch>
           </div>
        );
    }
    }   
   
 let setStateToProps = (store) => {
     return{
        initializationSeccess: store.initialization.success,
        emailUser: emailUser(store)
     }
 }    
 
let ContainerApp = compose(
    withRouter,
    connect(setStateToProps , { is_initialization })
)(App); 

let NovaKraina = () => {
return <BrowserRouter> <Provider store={store}> <ContainerApp/> </Provider>  </BrowserRouter>
}
 

export default NovaKraina
