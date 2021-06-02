import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  height: 90px;
  background-color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  position: relative;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  line-height: 1;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const AvatarIcon = styled.img`
  border-radius: 50px;
  width: 50px;
  height: 50px;

  background-color: white;

  position: absolute;
  right: 10px;

  @media (max-width: 1024px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

// navbar thingy
const BurgerDiv = styled.div`
  display: block;
  cursor: pointer;

  position: absolute;
  left: 10px;
`;
const BurgerLines = styled.div`
  width: 30px;
  height: 4px;
  margin: 5px;

  background-color: white;
`;

// state

interface Props {
  updateToggle: () => void;
}

const Header = ({ updateToggle }: Props) => {
  return (
    <HeaderDiv>
      <BurgerDiv onClick={updateToggle}>
        <BurgerLines />
        <BurgerLines />
        <BurgerLines />
      </BurgerDiv>
      <HeaderTitle>Demographics App</HeaderTitle>
      <AvatarIcon />
    </HeaderDiv>
  );
};

export default Header;
