import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const categories = [
  {
    value: "soup",
  },
  {
    value: "appetizer",
  },
  {
    value: "salads",
  },
  {
    value: "bread",
  },
  {
    value: "drink",
  },
  {
    value: "dessert",
  },
  {
    value: "side_dish",
  },
  {
    value: "main_dish",
  },
];
export default function AddRecipe() {
  const [recipe, setRecipe] = React.useState({
    title: "",
    instruction: "",
    category: categories[0],
    shortDescription: "",
    ingredients: [],
  });

  return (
    <View>
      <Text>Title</Text>
      <TextInput
        name="title"
        style={{ borderColor: "gray", borderWidth: 1 }}
        onChangeText={(inp) => setRecipe({ ...recipe, title: inp })}
        keyboardType="text"
        value={recipe.title}
      />
      <Text>Category</Text>

      <Text>Short description</Text>
      <TextInput
        name="shortDescription"
        style={{ borderColor: "gray", borderWidth: 1 }}
        onChangeText={(inp) => setRecipe({ ...recipe, shortDescription: inp })}
        keyboardType="text"
        value={recipe.shortDescription}
      />
      <Text>Instruction</Text>
      <TextInput
        name="instruction"
        style={{ borderColor: "gray", borderWidth: 1 }}
        onChangeText={(inp) => setRecipe({ ...recipe, instruction: inp })}
        keyboardType="text"
        value={recipe.instruction}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
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
