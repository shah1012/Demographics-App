import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/reducer/UserReducer";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HeaderDiv = styled.div`
  width: 100%;
  height: 10vh;
  background-color: var(--primaryColor);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  position: relative;
`;

const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: var(--whiteColor);
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

  cursor: pointer;

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
  width: 50px;
  height: 5px;
  margin: 10px;

  @media (max-width: 1024px) {
    width: 45px;
    height: 4px;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 3px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 3px;
  }

  background-color: var(--whiteColor);
`;

const LogoutLink = styled.a`
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1;
  color: var(--whiteColor);
  text-decoration: none;
  position: absolute;
  right: 5%;
  padding-bottom: 3px;

  cursor: pointer;

  background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 3px
    no-repeat;
  transition: 0.25s;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  &:hover {
    --d: 100%;
  }
`;
// state

interface Props {
  updateToggle: () => void;
}

const Header = ({ updateToggle }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem("JWT-TOKEN");
    dispatch(logout());
    history.push("/login");
  };

  return (
    <HeaderDiv>
      <BurgerDiv onClick={updateToggle}>
        <BurgerLines />
        <BurgerLines />
        <BurgerLines />
      </BurgerDiv>
      <HeaderTitle>Logo Detector App</HeaderTitle>
      <LogoutLink onClick={onLogout}>Log Out</LogoutLink>
    </HeaderDiv>
  );
};

export default Header;
