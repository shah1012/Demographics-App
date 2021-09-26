import React, { useState } from "react";
import InputForm from "../../components/containers/Form/InputForm";
import Navbar from "../../components/containers/Navbar/Navbar";
import { ParticleBackground } from "../../components/styled-components/Background/Background";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <ParticleBackground>
      <Navbar />
      <InputForm inputValue={inputValue} setInputValue={changeInputValue} />
    </ParticleBackground>
  );
};

export default Home;
