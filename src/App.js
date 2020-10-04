import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header class='d-flex justify-content-between align-items-end'>
          <Link to='/' class='align-self-center' id='headerLogo'>Giga.do</Link>
          <nav>
            <ul class='nav nav-tabs'>
              <li class='nav-item'>
                <Link to='/' class='nav-link'>Tasks</Link>
              </li>
              <li class='nav-item'>
                <Link to='/urgent' class='nav-link'>Urgent</Link>
              </li>
              <li class='nav-item'>
                <Link to='/past' class='nav-link'>Past Tasks</Link>
              </li>
              <li class='nav-item'>
                <Link to='/settings' class='nav-link'>Settings</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main id='main'>
          <Switch>
            <Route path='/urgent'>
              <Urgent />
            </Route>
            <Route path='/settings'>
              <Settings />
            </Route>
            <Route path='/past'>
              <Past />
            </Route>
            <Route path='/'>
              <Tasks />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function Tasks() {
  return (
    <h2>Tasks</h2>
  );
}

function Urgent() {
  return (
    <h2>Urgent Tasks</h2>
  );
}

function Past() {
  return (
    <h2>Past Tasks</h2>
  );
}

function Settings() {
  return (
    <h2>Settings</h2>
  );
}

export default App;
