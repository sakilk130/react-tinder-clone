import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import './styles/App.css';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        {/* Header */}
        <Switch>
          <Route path="/">
            <TinderCards />
          </Route>
          <Route path="/chat">Chat Page</Route>
        </Switch>

        {/* Tinder Cards */}
        {/* Buttons below tinder cards */}

        {/* Carts screen */}
        {/* individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
