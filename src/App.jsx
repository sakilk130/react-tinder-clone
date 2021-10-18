import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import './styles/App.css';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* Carts screen */}
        {/* individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
