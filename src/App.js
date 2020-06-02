import React from 'react';
import logo from './logo.svg';
import Home from './pages/Home/Home';
import OurClasses from './pages/OurClasses/OurClasses';
import OurServices from './pages/OurServices/OurServices';
import Pricing from './pages/Pricing/Pricing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/our-services">
            <OurServices/>
          </Route>
          <Route exact path="/our-classes">
            <OurClasses/>
          </Route>
          <Route exact path="/pricing">
            <Pricing/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
