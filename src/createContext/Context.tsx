"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  Reducer,
  Dispatch,
} from "react";

import { stateTypes, actionTypes } from "@/types";

type contextTypes = {
  state: stateTypes;
  dispatch: Dispatch<actionTypes>;
};

const CreateProvider = createContext<contextTypes | undefined>(undefined);

//Use globalContext() instead useContext()
export const globalContext = () => {
  const context = useContext(CreateProvider);

  if (!context) {
    throw new Error("Use globalContext instead of useContext");
  }

  return context;
};

//Children Type
type childrenType = {
  children: ReactNode;
};

const reducer: Reducer<stateTypes, actionTypes> = (state, action) => {
  switch (action.type) {
    case "SIDESWITCH":
      return { ...state, switch: action.payload };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }: childrenType) => {
  const initialize = {
    switch: false,
  };
  const [state, dispatch] = useReducer(reducer, initialize);
  return (
    <CreateProvider.Provider value={{ state, dispatch }}>
      {children}
    </CreateProvider.Provider>
  );
};
