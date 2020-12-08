const recipeReducer = (
  state = {
    recipes: [],
    loading: true,
    errorMessage: "",
    notificationMessage: null,
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
    case "ADD_RECIPE_ACTION":
      return {
        ...state,
        loading: true,
      };
    case "ADD_RECIPE_SUCCESS_ACTION":
      return {
        ...state,
        loading: false,
        recipes: state.recipes.concat([action.payload]),
        notificationMessage: "Recipe added!",
      };
    case "RECIPE_API_ERROR_ACTION":
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
        notificationMessage: action.payload,
      };
    case "DISMISS_SNACKBAR_ACTION":
      return {
        ...state,
        loading: false,
        notificationMessage: null,
      };
    default:
      return state;
  }
};

export default recipeReducer;
