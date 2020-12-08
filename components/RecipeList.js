import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { initGetRecipes } from "../redux/store";
export default function RecipeList() {
  const recipeState = useSelector((state) => state.recipeReducer);
  const dispatch = useDispatch();
  useEffect(() => dispatch(initGetRecipes()), []);
  console.log(recipeState.recipes);
  return (
    <View>
      {recipeState.recipes.isEmpty ? (
        <Text>No recipe</Text>
      ) : (
        <FlatList
          data={recipeState.recipes}
          renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#F0FFFF",
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
});
