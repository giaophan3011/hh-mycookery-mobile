export const getRecipesAction = () => {
  return { type: "GET_RECIPES_ACTION" };
};

export const getRecipesSuccessAction = (recipes) => {
  return { type: "GET_RECIPES_SUCCESS_ACTION", payload: recipes };
};

export const getRecipesErrorAction = (errorMessage) => {
  return { type: "GET_RECIPES_ERROR_ACTION", payload: errorMessage };
};
