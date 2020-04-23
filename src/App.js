import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faUsers, faUserFriends, faDiagnoses, faFileVideo, faMusic, faCamera, faGraduationCap, faHome, faMapMarker, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import AsideRight from './components/asideRight/AsideRight';
import Music from './components/music/Music';
import Video from './components/video/Video';
import Main from './components/main/Main';
import ProfileConteiner from './components/profile/ProfileContainer';
import FriendsContainer from './components/friends/FriendsContainer';
import MyFriendsContainer from'./components/myFriends/MyFriendsContainer';
import HeaderContainer from './components/header/HeaderContainer';
import AsideLeftContainer from './components/asideLeft/AsideLeftContainer';

import DialoguesContainer from './components/dialogues/DialoguesContainer';
import LoginContainer from './components/login/LoginContainer';



library.add(fab, faCheckSquare, faCoffee, faUsers, faUserFriends, faDiagnoses,
     faFileVideo, faMusic, faCamera, faGraduationCap, faHome, faMapMarker, faThumbsUp)




const App = () => {   

    return (
        <div className="grid" >
            <HeaderContainer />
            <AsideLeftContainer />
            <AsideRight />
            <Route path='/login' render={() => < LoginContainer />} />                    
            <Route path='/profile/:userId?' render={() => <ProfileConteiner  />} />
            <Route path='/friends' render={() => < FriendsContainer />} /> 
            <Route path='/dialogues'  render={() => < DialoguesContainer />} />
            <Route path='/video' render={() => < Video />}/>
            <Route path='/music'render={() => < Music />}/>
            <Route path='/myfriends'render={() => < MyFriendsContainer />}/> 
            <Route exact path='/'render={() => <Main />}/>  
            </div>
        );

         

    }   
   
     
 
 export default App;