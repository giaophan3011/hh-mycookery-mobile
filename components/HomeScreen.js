import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { initGetRecipes } from "../redux/store";
import CategoryList from "./CategoryList";
import RecipeList from "./RecipeList";

export default function HomeScreen() {
  const recipeState = useSelector((state) => state.recipeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initGetRecipes());
  }, []);
  console.log(recipeState.recipes);

  const categories = [
    { key: "All", scene: () => <RecipeList recipes={recipeState.recipes} /> },
    {
      key: "Soups",
      scene: () => (
        <RecipeList recipes={recipeState.recipes.filter((item) => item.category === "soup")} />
      ),
    },
    {
      key: "Starters",
      scene: () => (
        <RecipeList recipes={recipeState.recipes.filter((item) => item.category === "appetizer")} />
      ),
    },
    {
      key: "Salads",
      scene: () => (
        <RecipeList recipes={recipeState.recipes.filter((item) => item.category === "salad")} />
      ),
    },
    {
      key: "Main dishes",
      scene: () => (
        <RecipeList recipes={recipeState.recipes.filter((item) => item.category === "main_dish")} />
      ),
    },
    {
      key: "Side dishes",
      scene: () => (
        <RecipeList recipes={recipeState.recipes.filter((item) => item.category === "size_dish")} />
      ),
    },
    {
      key: "Breads",
      scene: () => (
        <RecipeList recipes={recipeState.recipes.filter((item) => item.category === "bread")} />
      ),
    },
    {
      key: "Drinks",
      scene: () => (
        <RecipeList recipes={recipeState.recipes.filter((item) => item.category === "drink")} />
      ),
    },
    {
      key: "Desserts",
      scene: () => (
        <RecipeList recipes={recipeState.recipes.filter((item) => item.category === "dessert")} />
      ),
    },
  ];

  return (
    <View style={styles.root}>
      {recipeState.loading ? (
        <View style={styles.busyContainer}>
          <ActivityIndicator size="large" color="#B2151C" />
        </View>
      ) : (
        <CategoryList categories={categories} style={styles.categoryList} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F2EAED",
  },
  busyContainer: {
    flex: 1,
    justifyContent: "center",
  },
  appTitle: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  actionTools: {
    flex: 1,
    alignItems: "flex-end",
  },
  categoryList: {
    backgroundColor: "pink",
  },
});
