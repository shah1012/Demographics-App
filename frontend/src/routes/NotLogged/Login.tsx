import React, { FormEvent, useState } from "react";
import {
  LoginH1,
  LoginWrapper,
  LoginForm,
  FormLabel,
  FormInput,
  FormButton,
  NewToThisLink,
  LinkToTHisPage,
} from "../../components/containers/LoginPage/Login";
import { ParticleBackground } from "../../components/styled-components/Background/Background";
import { LoginUrl } from "../../misc/backendUrls";
import axios from "axios";
import { useHistory } from "react-router";

const Login = () => {
  const [emailValue, setEmailValue] = useState<string>();
  const [passwordValue, setPasswordValue] = useState<string>("");
  const history = useHistory();

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
        history.push("/");
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
          <FormButton
            className="formButton"
            onClick={onFormSubmit}
            disabled={!(emailValue && passwordValue)}
          >
            Login
          </FormButton>

          <NewToThisLink>
            New to this site?{" "}
            <LinkToTHisPage onClick={() => history.push("/signup")}>
              Sign up
            </LinkToTHisPage>{" "}
          </NewToThisLink>
        </LoginForm>
      </LoginWrapper>
    </ParticleBackground>
  );
};

export default Login;
