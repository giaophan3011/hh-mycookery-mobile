import { combineReducers } from "redux";
import { getRecipes } from "../services/apiServices";
import { getRecipesSuccessAction } from "./actions/recipeActions";
import recipeReducer from "./reducers/recipeReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ recipeReducer });
export default createStore(rootReducer, applyMiddleware(thunk));

export function initGetRecipes() {
  return function (dispatch) {
    return getRecipes()
      .then((data) => dispatch(getRecipesSuccessAction(data)))
      .catch((err) => dispatch(getRecipesErrorAction(err)));
  };
}

export function addCustomerMiddleware(newCustomer) {
  return function (dispatch) {
    return addCustomer(newCustomer)
      .then((data) => {
        dispatch(addCustomerAction(data));
        dispatch(displaySuccessSnackbar("New customer added!"));
      })
      .catch((err) => displayErrorSnackbar(err));
  };
}
