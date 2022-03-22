import React, { FormEvent, useState } from "react";
import {
  LoginH1,
  LoginWrapper,
  LoginForm,
  FormLabel,
  FormInput,
  FormButton,
  NewToThisLink,
} from "../components/containers/LoginPage/Login";
import { ParticleBackground } from "../components/styled-components/Background/Background";
import { LinkToTHisPage } from "../components/styled-components/Link/LinkComponent";
import ErrorMessage from "../components/styled-components/ErrorMessege/ErrorMessege";
import { LoginUrl } from "../misc/backendUrls";
import axios from "axios";
import { useHistory } from "react-router-dom";
import validateToken from "../misc/validateFunction";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducer/UserReducer";

const Login = () => {
  const [emailValue, setEmailValue] = useState<string>();
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const history = useHistory();
  const dispatch = useDispatch();

  const displayErrorMsg = (msg: string) => {
    setErrMsg(msg);
    setTimeout(() => {
      setErrMsg("");
    }, 3000);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    axios
      .post(LoginUrl, {
        email: emailValue,
        password: passwordValue,
      })
      .then((data) => {
        let { token } = data.data;
        localStorage.setItem("JWT-TOKEN", token);
        validateToken(token)
          .then((data) => {
            if (data) {
              let userInfo = data[1];
              history.push("/home");
              dispatch(
                login({
                  id: userInfo.id,
                  username: userInfo.username,
                  email: userInfo.email,
                })
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });

        history.push("/home");
      })
      .catch((err) => {
        displayErrorMsg(err.response.data);
      });

    setEmailValue("");
    setPasswordValue("");
  };

  return (
    <ParticleBackground>
      <LoginWrapper>
        <LoginH1>XYZ</LoginH1>
        <LoginForm>
          <FormLabel className="formLabel">Email: </FormLabel>
          <FormInput
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            type="email"
            className="formInput"
          />
          <FormLabel className="formLabel">Password: </FormLabel>
          <FormInput
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            type="password"
            className="formInput"
          />
          <ErrorMessage msg={errMsg} />
          <FormButton
            className="formButton"
            onClick={onFormSubmit}
            disabled={!(emailValue && passwordValue)}
          >
            Login
          </FormButton>

          <NewToThisLink>
            New to this site? {LinkToTHisPage("/signup", "Sign Up")}
          </NewToThisLink>
        </LoginForm>
      </LoginWrapper>
    </ParticleBackground>
  );
};

export default Login;
