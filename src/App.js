import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Videos from './components/videos/Videos';
import Groups from './components/groups/Groups';
import Music from './components/music/Music';
import Dialogues from './components/dialogues/Dialogues';

const App = () => {
  return (<BrowserRouter>
    <div className="grid">
      <Header />
      <Nav />
      <Route path='/profile' component={Profile} />
      <Route path='/dialogues' component={Dialogues} />
      <Route path='/videos' component={Videos} />
      <Route path='/groups' component={Groups} />
      <Route path='/music' component={Music} />
      <Footer />
    </div>
  </BrowserRouter>

  );
}

export default App;
