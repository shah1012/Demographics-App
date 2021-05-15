import React, { FC, useState } from "react";
import Header from "../styled-components/header";
import Sidebar from "../styled-components/Sidebar";
import { NavbarList } from "../data/NavbarList";

const Navbar: FC = () => {
  const [toggle, setToggle] = useState(true);

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
