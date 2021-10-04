import React, { FC, useState } from "react";
import Header from "../../styled-components/Header/header";
import Sidebar from "../../styled-components/Sidebar/Sidebar";
import { NavbarList } from "../../../routes/NavbarRoutes";

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
