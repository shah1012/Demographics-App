import React, { useState } from "react";
import InputForm from "../components/containers/Form/InputForm";
import Navbar from "../components/containers/Navbar/Navbar";
import { BackgroundWrapper } from "../components/styled-components/Background/Background";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <BackgroundWrapper>
      <Navbar />
      <InputForm inputValue={inputValue} setInputValue={changeInputValue} />
    </BackgroundWrapper>
  );
};

export default Home;
