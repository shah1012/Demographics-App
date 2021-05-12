import React, { FC, useState } from "react";
import Header from "../styled-components/header";
import LinkComponent from "../styled-components/Sidebar";

const Navbar: FC = () => {
  const [toggle, setToggle] = useState(true);

  const updateToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <LinkComponent toggle={toggle} />
      <Header updateToggle={updateToggle} />
    </>
  );
};

export default Navbar;
