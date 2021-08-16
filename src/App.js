import './App.css';

import React from "react";

import Home from "./Home";
import Cashews from "./Cashews";
import Water from "./Water";
import Popcorn from "./Popcorn";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App row">
      <BrowserRouter>

        <div className="column routes">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/water">
            <Water />
          </Route>
          <Route exact path="/cashews">
            <Cashews />
          </Route>
          <Route exact path="/popcorn">
            <Popcorn />
          </Route>
        </div>

        <div className="column">
          <NavBar />
        </div>
      </BrowserRouter>
    </div>    
  );
}

export default App;
