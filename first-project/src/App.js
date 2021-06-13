import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.sidebarPage} />
      <div className='app-wrapper-content'>
        <Route path="/dialogs"
          render={() => <DialogsContainer />} />
        <Route path="/profile"
          render={() => <Profile />} />
        <Route path="/news"
          render={() => <News />} />
        <Route path="/music"
          render={() => <Music />} />
        <Route path="/settings"
          render={() => <Settings />} />
        <Route path="/friends"
          render={() => <Friends />} />
      </div>
    </div>
  )
}

export default App;
