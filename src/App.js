import React from 'react';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import SocialMedia from './SocialMedia';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
    <ul>
    <li><Link to="/">Header</Link></li>
    <li><Link to="/AboutMe">AboutMe</Link></li>
    <li><Link to="/Projects">Projects</Link></li>
    <li><Link to="/Skills">Skills</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/SocialMedia">SocialMedia</Link></li>

  </ul>
  
      <Switch>
        <Route exact path="/"  element={<Header/>} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Skills" component={Skills} />
        <Route exact path='/Contact' component={ Contact }></Route>
        <Route exact path="/SocialMedia" component={SocialMedia} />
      </Switch>
</BrowserRouter>
  );
}
export default App;
