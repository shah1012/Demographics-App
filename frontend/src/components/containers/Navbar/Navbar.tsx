import React, { FC, useState } from "react";
import Header from "../../styled-components/Header/header";
import Sidebar from "../../styled-components/Sidebar/Sidebar";
import { NavbarList } from "../../../routes/NavbarRoutes";

const Navbar: FC = () => {
  const [toggle, setToggle] = useState(true);

  const updateToggle = (BurgerRef: React.RefObject<HTMLDivElement>) => {
    setToggle(!toggle);
    if (BurgerRef.current !== null) {
      BurgerRef.current.children[0].classList.toggle("toggle-nav-1");
      BurgerRef.current.children[1].classList.toggle("toggle-nav-2");
      BurgerRef.current.children[2].classList.toggle("toggle-nav-3");
    }
  };
  return (
    <>
      <Sidebar toggle={toggle} list={NavbarList} />
      <Header updateToggle={updateToggle} />
    </>
  );
};

export default Navbar;
