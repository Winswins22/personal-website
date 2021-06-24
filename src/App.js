import './App.css';

import React from 'react'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import ContactPage from './pages/ContactPage/ContactPage'
//import Loader from './components/Loader/Loader'

import TestPage from './pages/TestPage/TestPage'

function App() {

  console.log("Debug: v0.0.05")

  return (
    <>

      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route path='/personal-website' exact component={HomePage}></Route>
          <Route path='/about' component={AboutPage}></Route>
          <Route path='/skills' component={SkillsPage}></Route>
          <Route path='/contact' component={ContactPage}></Route>
          <Route path='/test' component={TestPage}></Route>
        </Switch>
        
      </Router>

    </>
  );
}

export default App;