import React, { useEffect, useState } from "react";
import "./css/App.css";

import Spinner from "./components/styled-components/Spinner/Spinner";
import axios from "axios";
import { accountUrl, validateUrl } from "./misc/backendUrls";
import Logged from "./routes/Logged";
import NotLogged from "./routes/NotLogged";

function App() {
  const [toggle, setToggle] = useState(true);
  const [valid, setValid] = useState(false);

  const validateToken = async (token: string) => {
    try {
      const { data } = await axios.get(validateUrl, {
        headers: {
          jwt_token: token,
        },
      });

      localStorage.setItem("JWT-TOKEN", data.token);
      const res = await axios.get(accountUrl, {
        headers: {
          jwt_token: token,
        },
      });

      const { email, username, id } = res.data;
      const newPayload = {
        id,
        email,
        username,
      };

      return [data.token, newPayload];
    } catch (err) {
      console.dir(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("JWT-TOKEN");
    if (token) {
      validateToken(token)
        .then((data) => {
          if (data) {
            setValid(true);
          }
        })
        .catch((err) => console.dir(err));
    }
  }, []);

  return (
    <div className="App">
      <>{valid ? <Logged /> : <NotLogged />}</>
    </div>
  );
}

export default App;
