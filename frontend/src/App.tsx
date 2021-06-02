import React from "react";
import "./css/App.css";
import Clarifai from "clarifai";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Account from "./routes/Account";

const app = new Clarifai.App({
  apiKey: "6bd9914d39e64d3eadb3b690275631f4",
});

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home ClarifaiApp={app} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Router>
    </div>
  );
}

export default App;
