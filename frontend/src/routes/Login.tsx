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
} from "../components/containers/LoginPage/Login";
import { BackgroundWrapper } from "../components/styled-components/Background/Background";
import { LoginUrl } from "../misc/backendUrls";
import axios from "axios";

const Login = () => {
  const [emailValue, setEmailValue] = useState<string>();
  const [passwordValue, setPasswordValue] = useState<string>("");

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    axios
      .post(LoginUrl, {
        email: emailValue,
        password: passwordValue,
      })
      .then((data) => console.log(data));

    setEmailValue("");
    setPasswordValue("");
  };

  return (
    <BackgroundWrapper>
      <LoginWrapper>
        <LoginH1>XYZ</LoginH1>
        <LoginForm>
          <FormLabel className="formLabel">Email: </FormLabel>
          <FormInput
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            type="text"
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
            <LinkToTHisPage href="/signup">Sign up</LinkToTHisPage>{" "}
          </NewToThisLink>
        </LoginForm>
      </LoginWrapper>
    </BackgroundWrapper>
  );
};

export default Login;
