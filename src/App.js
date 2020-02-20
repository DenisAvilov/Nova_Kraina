import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faUsers, faUserFriends, faDiagnoses, faFileVideo, faMusic, faCamera, faGraduationCap, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons'

import Header from './components/header/Header';
import AsideLeft from './components/asideLeft/AsideLeft';
import AsideRight from './components/asideRight/AsideRight';
import Profile from './components/profile/Profile';
import Music from './components/music/Music';
import Dialogues from './components/dialogues/Dialogues';
import Video from './components/video/Video';
import Main from './components/main/Main';
import Friends from './components/friends/Friends';


library.add(fab, faCheckSquare, faCoffee, faUsers, faUserFriends, faDiagnoses, faFileVideo, faMusic, faCamera, faGraduationCap, faHome, faMapMarker)

const App = () => {
  return (<BrowserRouter>
    <div className="grid">
      <Header />
      <AsideLeft />
      <AsideRight />
      <Main />
      {/* <Profile /> */}
      {/* <Dialogues />
      <Video />
      <Music /> */}
      <Route path='/profile' render={() => <Profile />} />
      <Route path='/friends' render={() => <Friends /> } />
      <Route path='/dialogues' render={() =>  <Dialogues /> } />
      <Route path='/video' render={() =>  <Video /> } />
      <Route path='/music' render={() =>  <Music /> } />  

    </div>
  </BrowserRouter>

  );
}

export default App;
