import { combineReducers } from "redux";
import { getRecipes, postRecipe } from "../services/apiServices";
import {
  addRecipeSuccessAction,
  getRecipesSuccessAction,
  recipeApiErrorAction,
} from "./actions/recipeActions";
import recipeReducer from "./reducers/recipeReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ recipeReducer });
export default createStore(rootReducer, applyMiddleware(thunk));

export function initGetRecipes() {
  return function (dispatch) {
    return getRecipes()
      .then((data) => dispatch(getRecipesSuccessAction(data)))
      .catch((err) => dispatch(recipeApiErrorAction(err)));
  };
}

export function initAddRecipe(newRecipe) {
  return function (dispatch) {
    return postRecipe(newRecipe)
      .then((data) => {
        console.log(data);
        dispatch(addRecipeSuccessAction(data));
        // dispatch(displaySuccessSnackbar("New customer added!"));
      })
      .catch((err) => dispatch(recipeApiErrorAction(err)));
  };
}
