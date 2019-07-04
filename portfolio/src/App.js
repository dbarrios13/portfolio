import React from 'react';
import { Route } from 'react-router-dom'
import './styles/index.sass';

// import components
import Welcome from './components/welcome/Welcome'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Welcome}/>
      <Route path='/projects' component={Main}/>
    </div>
  );
}

export default App;
