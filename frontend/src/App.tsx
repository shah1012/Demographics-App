import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./css/App.css";

import { Home, About, Account, Login, Signup, ProtectedRoute } from "./routes";
import { login, selectUser } from "./redux/reducer/UserReducer";
import validateToken from "./misc/validateFunction";

import { SpinnerContext } from "./contexts/SpinnerContext";
import { PredictionContext } from "./contexts/PredictionContext";
import { NameType } from "./types/NameType";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [predictions, setPredictions] = useState<NameType[]>([]);

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
      <SpinnerContext.Provider value={{ loaded, setLoaded }}>
        <PredictionContext.Provider value={{ predictions, setPredictions }}>
          <Switch>
            <Route path="/login" component={() => <Login />} />
            <Route path="/signup" component={Signup} />
            <ProtectedRoute user={user} path="/home" component={Home} />
            <ProtectedRoute user={user} path="/about" component={About} />
            <ProtectedRoute user={user} path="/account" component={Account} />
          </Switch>
        </PredictionContext.Provider>
      </SpinnerContext.Provider>
    </div>
  );
}

export default App;
