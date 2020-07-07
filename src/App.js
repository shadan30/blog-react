import React from 'react';
import './App.css';
import Home from './containers/Home';
import Contactus from './containers/Contactus';
import Posts from './containers/Posts';
import Aboutus from './containers/Aboutus';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
    <Header/>
    <div className="box">
    <Hero/>
    <Route path="/" exact component={Home}/>
    <Route path="/contactus" component={Contactus}/>
    <Route path="/posts/:postid" component={Posts}/>
    <Route path="/aboutus" component={Aboutus}/>
    </div>
    </div>
    </Router>
  );
}

export default App;
