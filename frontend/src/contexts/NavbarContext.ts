import { createContext, SetStateAction, useContext, Dispatch } from "react";

export type NavbarContextType = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};

export const NavbarContext = createContext<NavbarContextType>({
  toggle: true,
  setToggle: () => console.log("no navbar context provider"),
});

export const useNavbar = () => useContext(NavbarContext);
