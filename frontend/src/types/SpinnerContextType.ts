import { Dispatch, SetStateAction } from "react";

export type SpinnerContextType = {
  loaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
};
