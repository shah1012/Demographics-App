import React, { useEffect, useState } from "react";
import "./css/App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Account from "./routes/Account";
import Login from "./routes/Login";
import { NavbarContext } from "./contexts/NavbarContext";
import Spinner from "./components/styled-components/Spinner/Spinner";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <Router>
        <NavbarContext.Provider value={{ toggle, setToggle }}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/account">
            <Account />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </NavbarContext.Provider>
      </Router>
    </div>
  );
}

export default App;
