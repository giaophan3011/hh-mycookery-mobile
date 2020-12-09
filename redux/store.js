import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { getRecipes, postRecipe } from "../services/apiServices";
import { changeLanguageAction } from "./actions/appActions";
import {
  addRecipeSuccessAction,
  getRecipesSuccessAction,
  recipeApiErrorAction,
} from "./actions/recipeActions";
import appReducer from "./reducers/appReducer";
import recipeReducer from "./reducers/recipeReducer";

const rootReducer = combineReducers({ recipeReducer, appReducer });
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

export function initChangeLanguage(language) {
  return function (dispatch) {
    if (language === "SYSTEM") {
      i18n.locale = Localization.locale;
    } else {
      i18n.locale = language.toLowerCase();
    }
    dispatch(changeLanguageAction(language));
  };
}
