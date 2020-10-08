import React from 'react';
//import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import * as logic from './logic.js';

function App() {
  return (
    <Router>
        <header class='d-flex justify-content-between align-items-end'>
          <Link to='/' class='align-self-center' id='headerLogo'>Giga.do</Link>
          <nav>
            <ul class='nav nav-tabs'>
              <li class='nav-item'>
                <Link to='/' class='nav-link'>Tasks</Link>
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
        <main id='main' class='d-flex flex-column'>
          <button type='button' class='btn btn-primary align-self-end' id='newTaskButton' onClick={() => {logic.showElement(logic.newTaskHolder)}}>New Task</button>
          <Switch>
            <Route path='/settings'>
              <Settings />
            </Route>
            <Route path='/past'>
              <Past />
            </Route>
            <Route path='/'>
              <TasksPage />
            </Route>
          </Switch>
        </main>
    </Router>
  )
}

const TaskList = () => {
  return (
    <div>
      {logic.normalFormat.map(task => (
        <div id='taskDiv'>
          <h3>{task[0].charAt(0).toUpperCase()+task[0].slice(1)}</h3>
          <p class='text-right'>{task[1]}</p>
          <p>{task[2]}</p>
          <p class='text-center'>{task[3]===true?'Urgent!':''}</p>
        </div>
      ))}
    </div>
  );
}

function TasksPage() {
  return (
    <div>
      <h2 class='text-right'>Tasks</h2>
      <section class='d-flex flex-column align-items-center' id='tasks'>
        <TaskList />
      </section>
    </div>
  );
}

function Past() {
  return (
    <h2 class='text-right'>Past Tasks</h2>
  );
}

function Settings() {
  return (
    <h2 class='text-right'>Settings</h2>
  );
}

export default App;
