import React, { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  RouteComponentProps,
  useHistory,
} from "react-router";
import { NavbarContext } from "../../contexts/NavbarContext";
import Login from "./Login";
import Signup from "./Signup";

const Index: React.FC = () => {
  let [toggle, setToggle] = useState(false);
  const history = useHistory();

  useEffect(() => {
    history.push("/login");
  }, []);
  return (
    <>
      <NavbarContext.Provider value={{ toggle, setToggle }}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </NavbarContext.Provider>
    </>
  );
};

export default Index;
