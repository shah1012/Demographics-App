import React from "react";
import Navbar from "../components/containers/Navbar/Navbar";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  width: 100%;
  height: 90vh;
  background-color: var(--secondaryColor);
`;

const Account = () => {
  return (
    <div>
      <Navbar />
      <BackgroundDiv></BackgroundDiv>
    </div>
  );
};

export default Account;
