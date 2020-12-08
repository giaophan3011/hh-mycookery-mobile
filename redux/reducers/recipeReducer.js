const recipeReducer = (
  state = {
    recipes: [],
    loading: false,
    errorMessage: "",
  },
  action
) => {
  switch (action.type) {
    case "GET_RECIPES_ACTION":
      return {
        ...state,
        loading: true,
      };
    case "GET_RECIPES_SUCCESS_ACTION":
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case "GET_RECIPES_ERROR_ACTION":
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default recipeReducer;
