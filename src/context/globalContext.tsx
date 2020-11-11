import React, { createContext, ProviderProps, useReducer } from "react";
import { RootReducer } from "./rootReducer";

interface todo {
  text: string;
  amount: number;
}
interface initialState {
  transaction: todo[];
}

const initialState: initialState = {
  transaction: [
    { text: "salary", amount: 200 },
    { text: "grocery", amount: -100 },
  ],
};
interface ContextProps {
  transaction: todo[];
  dispatch: React.Dispatch<any>;
}
export const GlobalContext = createContext<ContextProps>({
  transaction: initialState.transaction,
  dispatch: () => null,
});

export const GlobalProvider=({children}:any) => {
  const [state, dispatch] = useReducer(RootReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
