import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  font-size: 1.5rem;
  width: 700px;
  height: 45px;

  padding: 1rem;
  border: 2px solid red;

  @media (max-width: 1024px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 480px) {
    width: 300px;
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

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 91vh;
`;

const InputForm = () => {
  return (
    <FormWrapper>
      <InputField />
      <InputButton>Submit</InputButton>
    </FormWrapper>
  );
};

export default InputForm;
