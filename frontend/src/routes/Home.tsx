import React, { useState } from "react";
import Clarifai from "clarifai";
import InputForm from "../components/containers/Form/InputForm";
import Navbar from "../components/containers/Navbar/Navbar";
import Spinner from "../components/styled-components/Spinner/Spinner";

interface Props {}

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <InputForm inputValue={inputValue} setInputValue={changeInputValue} />
    </div>
  );
};

export default Home;
