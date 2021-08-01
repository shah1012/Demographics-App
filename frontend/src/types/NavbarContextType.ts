import { Dispatch, SetStateAction } from "react";

export type NavbarContextType = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};
