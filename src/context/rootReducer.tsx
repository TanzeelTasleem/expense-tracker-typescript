export const RootReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transaction: [
          ...state.transaction.slice(0, action.payload.value),
          ...state.transaction.slice(action.payload.value + 1),
        ],
      };
    default:
      return {
        ...state,
        transaction: [...state.transaction],
      };
  }
};
