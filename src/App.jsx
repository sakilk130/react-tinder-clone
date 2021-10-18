import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import './styles/App.css';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        {/* Header */}
        <Switch>
          <Route path="/">
            {/* Tinder Cards */}
            <TinderCards />
            {/* Buttons */}
            <SwipeButtons />
          </Route>
          <Route path="/chat">Chat Page</Route>
        </Switch>

        {/* Carts screen */}
        {/* individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
