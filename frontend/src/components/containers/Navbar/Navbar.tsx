import React, { FC, useState } from "react";
import Header from "../../styled-components/Header/header";
import Sidebar from "../../styled-components/Sidebar/Sidebar";
import { NavbarList } from "../../../routes/NavbarRoutes";
import { useNavbar } from "../../../contexts/NavbarContext";

const Navbar: FC = () => {
  const { toggle, setToggle } = useNavbar();

  const updateToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Sidebar toggle={toggle} list={NavbarList} />
      <Header updateToggle={updateToggle} />
    </>
  );
};

export default Navbar;
