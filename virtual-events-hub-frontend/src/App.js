// virtual-events-hub-frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={EventList} />
        <Route path="/event/:id" component={EventDetail} />
      </Routes>
    </Router>
  );
};

export default App;

