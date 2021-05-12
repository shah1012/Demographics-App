import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
