import { createContext, SetStateAction, useContext, Dispatch } from "react";
import { NavbarContextType } from "../types/NavbarContextType";

export const NavbarContext = createContext<NavbarContextType>({
  toggle: true,
  setToggle: () => console.log("no navbar context provider"),
});

export const useNavbar = () => useContext(NavbarContext);
