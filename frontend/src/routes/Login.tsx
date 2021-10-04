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
import { ParticleBackground } from "../components/styled-components/Background/Background";
import { LoginUrl } from "../misc/backendUrls";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

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
        history.push("/home");
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
            <LinkToTHisPage>
              <Link to="/signup">Sign up</Link>
            </LinkToTHisPage>{" "}
          </NewToThisLink>
        </LoginForm>
      </LoginWrapper>
    </ParticleBackground>
  );
};

export default Login;
