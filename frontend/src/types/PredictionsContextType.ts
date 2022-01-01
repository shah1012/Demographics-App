import { Dispatch, SetStateAction } from "react";
import { NameType } from "./NameType";

export type PredictionsContextType = {
  predictions: NameType[];
  setPredictions?: Dispatch<SetStateAction<NameType[]>>;
};
