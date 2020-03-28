import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faUsers, faUserFriends, faDiagnoses, faFileVideo, faMusic, faCamera, faGraduationCap, faHome, faMapMarker, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import AsideRight from './components/asideRight/AsideRight';
import Music from './components/music/Music';
import Dialogues from './components/dialogues/Dialogues';
import Video from './components/video/Video';
import Main from './components/main/Main';
import ProfileConteiner from './components/profile/ProfileContainer';
import FriendsContainer from './components/friends/FriendsContainer';
import MyFriendsContainer from'./components/myFriends/MyFriendsContainer';
import HeaderContainer from './components/header/HeaderContainer';
import AsideLeftContainer from './components/asideLeft/AsideLeftContainer';


library.add(fab, faCheckSquare, faCoffee, faUsers, faUserFriends, faDiagnoses,
     faFileVideo, faMusic, faCamera, faGraduationCap, faHome, faMapMarker, faThumbsUp)

const App = () => {
   
    return (
        <div className="grid" >
            <HeaderContainer />
            <AsideLeftContainer />
            <AsideRight />
            <Route path='/main' render={() => <Main  />} />          
            <Route path='/profile/:userId?' render={() => <ProfileConteiner  />} />
            <Route path='/friends' render={() => < FriendsContainer />} /> 
            <Route path='/dialogues'  render={() => < Dialogues />} />
            <Route path='/video' render={() => < Video />}/>
            <Route path='/music'render={() => < Music />}/>
            <Route path='/myfriends'render={() => < MyFriendsContainer />}/> 

            </div>
        );
    }
    
    
export default App;