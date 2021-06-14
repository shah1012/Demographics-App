import React, { FormEvent } from "react";
import styled from "styled-components";

const InputField = styled.input`
  font-size: 1.5rem;
  width: 700px;
  height: 45px;

  padding: 1rem;
  border: 1px solid black;

  @media (max-width: 1024px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }

  &:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 0 3px hsla(220, 100%, 50%, 80%);
  }
`;

const InputButton = styled.button`
  background-color: blue;
  color: white;

  border: none;
  outline: none;

  cursor: pointer;

  width: 150px;
  height: 45px;

  font-size: 1.5rem;
  user-select: none;

  &:active {
    background-color: darkblue;
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
  align-items: center;

  width: 100%;
  height: 91vh;
`;

interface Props {
  inputValue: string;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
};

const InputForm = ({ inputValue, setInputValue }: Props) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputField onChange={(e) => setInputValue(e)} value={inputValue} />
      <InputButton>Submit</InputButton>
    </FormWrapper>
  );
};

export default InputForm;
