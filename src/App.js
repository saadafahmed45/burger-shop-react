import React from "react";
import "./App.css"

import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BtnavBar from "./Components/BtnavBar/BtnavBar";
import Slider from "./Components/Slider/Slider";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";


const App = () => {
  return (
    <div className="App">
  
  <Router>
    {/* <Navbar /> */}
    {/* <BtnavBar/> */}
  <Switch>
          <Route path="/" exact>
            {/* <Slider></Slider> */}
      <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
  </Router>
    </div>
  );
};

export default App;
