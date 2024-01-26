import logo from './logo.svg';
// virtual-events-hub-frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EventList} />
        <Route path="/event/:id" component={EventDetail} />
      </Switch>
    </Router>
  );
};

export default App;
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
