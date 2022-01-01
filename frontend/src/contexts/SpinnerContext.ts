import { createContext, SetStateAction, useContext, Dispatch } from "react";
import { SpinnerContextType } from "../types/SpinnerContextType";

export const SpinnerContext = createContext<SpinnerContextType>({
  loaded: true,
  setLoaded: () => console.log("no spinner context provider"),
});

export const useSpinner = () => useContext(SpinnerContext);
