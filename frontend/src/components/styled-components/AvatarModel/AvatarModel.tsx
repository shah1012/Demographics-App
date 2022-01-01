import React from "react";
import styled from "styled-components";

interface Props {
  toggle: boolean;
}

const Div = styled.div`
  position: absolute;
  right: 1vw;
  top: 10vh;
  width: 300px;
  height: 250px;
  background-color: var(--red);j
  border-radius: 10px;
  z-index: 5;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;

  border-bottom: 20px solid var(--red);

  position: absolute;
  right: 0vw;
  top: -1.6vh;
`;

const AvatarModel = ({ toggle }: Props) => {
  if (!toggle) {
    return null;
  }
  return (
    <Div>
      <Arrow></Arrow>
    </Div>
  );
};

export default AvatarModel;
