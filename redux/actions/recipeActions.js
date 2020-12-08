export const getRecipesAction = () => {
  return { type: "GET_RECIPES_ACTION" };
};

export const getRecipesSuccessAction = (recipes) => {
  return { type: "GET_RECIPES_SUCCESS_ACTION", payload: recipes };
};

export const recipeApiErrorAction = (errorMessage) => {
  return { type: "RECIPE_API_ERROR_ACTION", payload: errorMessage };
};

export const addRecipeAction = () => {
  return { type: "ADD_RECIPE_ACTION" };
};

export const addRecipeSuccessAction = (recipe) => {
  return { type: "ADD_RECIPE_SUCCESS_ACTION", payload: recipe };
};

export const dismissSnackbarAction = () => {
  return { type: "DISMISS_SNACKBAR_ACTION" };
};
