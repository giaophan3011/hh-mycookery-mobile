const appReducer = (
  state = {
    language: "EN",
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE_ACTION":
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
