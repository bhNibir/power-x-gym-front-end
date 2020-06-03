import React, { createContext } from 'react';
import Home from './pages/Home/Home';
import OurClasses from './pages/OurClasses/OurClasses';
import OurServices from './pages/OurServices/OurServices';
import Pricing from './pages/Pricing/Pricing';
import Contact from './pages/Contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/Header/Header';

export const UserContext = createContext();

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
          <Route exact path="/home">
            <Header/>
            <Home/>
          </Route>
          <Route exact path="/our-services">
            <Header sliderText={"our services"} />
            <OurServices/>
          </Route>
          <Route exact path="/our-classes">
            <Header sliderText={"Advance GYM"} />
            <OurClasses/>
          </Route>
          <Route exact path="/contact">
            <Header/>
            <Contact/>
          </Route>
          <UserContext.Provider value="test">
            <Route exact path="/pricing">
              <Header sliderText={"Pricing Plans"} />
              <Pricing/>
            </Route>
          </UserContext.Provider>
          
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
