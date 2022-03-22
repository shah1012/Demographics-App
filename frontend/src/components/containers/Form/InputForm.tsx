import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ImageUrl } from "../../../misc/backendUrls";
import ImageContainer from "../ImageContainer/Container";
import { NameType } from "../../../types/NameType";

const InputField = styled.input`
  font-size: 28px;
  width: 700px;
  height: 50px;

  border-radius: 10px;
  border: none;

  background-color: var(--primaryColor);
  color: var(--whiteColor);

  padding: 1rem;

  margin-right: 2rem;

  @media (max-width: 1024px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    width: 500px;
    margin-right: 1rem;
  }

  @media (max-width: 480px) {
    width: 300px;
    margin-right: 0.5rem;
  }

  &:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 0 3px hsla(220, 100%, 50%, 80%);
  }
`;

const InputButton = styled.button`
  background-color: var(--red);
  color: var(--whiteColor);

  border-radius: 10px;

  border: none;
  outline: none;

  cursor: pointer;

  width: 125px;
  height: 50px;

  font-size: 1.5rem;
  user-select: none;

  &:active {
    background-color: darkRed;
    transform: scale(0.9);
  }

  @media (max-width: 1024px) {
    width: 125px;
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    width: 100px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 75px;
    font-size: 0.95rem;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 90%;
`;

const FormContanier = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-items: center;
`;

interface Props {
  inputValue: string;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = ({ inputValue, setInputValue }: Props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [predictions, setPredictions] = useState<NameType[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setImageUrl(inputValue);

    axios
      .post(ImageUrl, {
        url: inputValue,
      })
      .then((data) => {
        let temp: NameType[] = [];
        data.data.forEach((d: NameType) => {
          let val = Math.round(100 * d.probability) / 100;
          let t = { className: d.className, probability: val };
          temp.push(t);
        });

        setPredictions(temp);
      });
  };

  useEffect(() => {
    console.log(predictions);
  }, [predictions]);

  return (
    <FormContanier>
      <ImageContainer url={imageUrl} />
      <FormWrapper onSubmit={(e) => handleSubmit(e)}>
        <InputField
          placeholder={"Image url here"}
          onChange={(e) => setInputValue(e)}
          value={inputValue}
        />
        <InputButton>Submit</InputButton>
      </FormWrapper>
    </FormContanier>
  );
};

export default InputForm;
