import React, { useEffect, useState } from "react";
import "./css/App.css";

import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./routes/Home";
import Signup from "./routes/Signup";

import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./redux/reducer/UserReducer";
import validateToken from "./misc/validateFunction";
import About from "./routes/About";
import Account from "./routes/Account";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("JWT-TOKEN");
    if (token) {
      validateToken(token)
        .then((data) => {
          if (data) {
            let userInfo = data[1];
            dispatch(
              login({
                id: userInfo.id,
                username: userInfo.username,
                email: userInfo.email,
              })
            );
            history.push("/home");
          } else {
            history.push("/login");
          }
        })
        .catch((err) => console.dir(err));
    } else {
      history.push("/login");
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={() => <Login />} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute user={user} path="/home" component={Home} />
        <ProtectedRoute user={user} path="/about" component={About} />
        <ProtectedRoute user={user} path="/account" component={Account} />
      </Switch>
    </div>
  );
}

export default App;
