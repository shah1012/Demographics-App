import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import { NavbarContext } from "../../contexts/NavbarContext";
import About from "./About";
import Account from "./Account";
import Home from "./Home";

const Index = () => {
  let [toggle, setToggle] = useState(false);
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, []);

  return (
    <>
      <NavbarContext.Provider value={{ toggle, setToggle }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </NavbarContext.Provider>
    </>
  );
};

export default Index;
