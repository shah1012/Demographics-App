import React, { useState } from "react";
import Clarifai from "clarifai";
import InputForm from "../components/containers/InputForm";
import Navbar from "../components/containers/Navbar";

interface Props {
  ClarifaiApp: any;
}

const Home = ({ ClarifaiApp }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const predictApi = () => {
    console.log(Clarifai);
    ClarifaiApp.models
      .predict(Clarifai.DEMOGRAPHICS_MODEL, inputValue)
      .then((res: any) => console.log(res))
      .catch((err: string) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <InputForm
        inputValue={inputValue}
        setInputValue={changeInputValue}
        predictApi={predictApi}
      />
    </div>
  );
};

export default Home;
