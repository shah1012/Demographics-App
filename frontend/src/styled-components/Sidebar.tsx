import React from "react";
import styled from "styled-components";

interface Props {
  toggle: boolean;
}

// Main Links Div
const SidebarContainer = styled.div`
  position: absolute;
  top: 8vh;

  width: 30%;
  height: 92vh;

  background-color: black;

  display: flex;
  justify-content: center;

  transform: ${(props: Props) =>
    props.toggle ? "translateX(-100%)" : "translateX(0)"};

  transition: all 0.5s ease-in;
  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 60%;
  }
`;

const SidebarNav = styled.nav`
  width: 60%;
  height: 100%;
`;

const SidebarUL = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const SidebarLink = styled.li`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1;
  color: white;
`;

const Sidebar = ({ toggle }: Props) => {
  return (
    <SidebarContainer toggle={toggle}>
      <SidebarNav>
        <SidebarUL>
          <SidebarLink>Hi</SidebarLink>
          <SidebarLink>Hi</SidebarLink>
          <SidebarLink>Hi</SidebarLink>
        </SidebarUL>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
