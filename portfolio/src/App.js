import React from 'react';
import { Route } from 'react-router-dom'
import './styles/index.sass';

// import components
import Welcome from './components/welcome/Welcome'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Contact from './components/contact/Contact'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Welcome}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </div>
  );
}

export default App;
