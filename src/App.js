import './App.css';

import React from 'react'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import ContactPage from './pages/ContactPage/ContactPage'

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/about' component={AboutPage}></Route>
          <Route path='/skills' component={SkillsPage}></Route>
          <Route path='/contact' component={ContactPage}></Route>
        </Switch>
        
      </Router>
    </>
  );
}

export default App;