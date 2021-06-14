import React from "react";
import styled, { keyframes } from "styled-components";

const spinner = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const SpinnerDiv = styled.div`
  width: 6rem;
  height: 6rem;
  border: 5px solid grey;
  border-radius: 50%;
  border-top-color: black;
  animation: ${spinner} 0.6s linear infinite;
`;

const Spinner = () => {
  return <SpinnerDiv></SpinnerDiv>;
};

export default Spinner;
