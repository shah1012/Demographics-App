import React, { useState } from "react";
import InputForm from "../containers/InputForm";
import Navbar from "../containers/Navbar";

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
