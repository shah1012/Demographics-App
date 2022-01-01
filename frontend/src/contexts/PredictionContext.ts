import { createContext, useContext } from "react";
import { PredictionsContextType } from "../types/PredictionsContextType";

const initalState = {
  predictions: [],
};

export const PredictionContext =
  createContext<PredictionsContextType>(initalState);

export const usePredictions = () => useContext(PredictionContext);
