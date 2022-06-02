import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { NameType } from "../../../types/NameType";

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const Arrows = styled.div`
  color: var(--whiteColor);
  background-color: var(--red);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  border-radius: 10px;

  &:active {
    background: darkred;
  }
`;

const TextBox = styled.div`
  width: 100%;
  max-width: 550px;
  height: 50px;
  font-size: 1.4rem;
  font-weight: 300;
  text-align: center;
  background: #00008b;
  border-radius: 20px;
  margin: 0px 20px;
  color: var(--whiteColor);
`;

interface Props {
  predictions: NameType[];
}

const DisplayPredictions = ({ predictions }: Props) => {
  const [curr, setCurr] = useState<number>(0);

  const onLeft = () => {
    if (curr > 0 && curr < predictions.length) {
      let neg = curr - 1;
      setCurr(neg);
    }
  };

  const onRight = () => {
    if (curr >= 0 && curr < predictions.length - 1) {
      let pos = curr + 1;
      setCurr(pos);
    }
  };

  return (
    <Wrapper>
      <Arrows onClick={onLeft}>
        <AiOutlineArrowLeft />
      </Arrows>
      <TextBox>{`${predictions[curr]?.className} ${
        predictions[curr]?.probability * 100
      }%`}</TextBox>
      <Arrows onClick={onRight}>
        <AiOutlineArrowRight />
      </Arrows>
    </Wrapper>
  );
};

export default DisplayPredictions;
