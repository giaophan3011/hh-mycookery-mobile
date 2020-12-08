import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { initAddRecipe } from "../redux/store";

export const categories = [
  "soup",
  "appetizer",
  "salads",
  "bread",
  "drink",
  "dessert",
  "side_dish",
  "main_dish",
];

export default function AddRecipe() {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = React.useState({
    title: "",
    instruction: "",
    category: categories[0],
    shortDescription: "",
    ingredients: [],
  });

  const saveNewRecipe = () => {
    dispatch(initAddRecipe(recipe));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.inputField}
          name="title"
          onChangeText={(inp) => setRecipe({ ...recipe, title: inp })}
          keyboardType="text"
          value={recipe.title}
        />
        <Text style={styles.title}>Category</Text>
        <Picker
          selectedValue={recipe.category}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => setRecipe({ ...recipe, category: itemValue })}
        >
          {categories.map((type) => (
            <Picker.Item label={type} value={type} />
          ))}
        </Picker>
        <Text style={styles.title}>Short description</Text>
        <TextInput
          style={styles.inputField}
          name="shortDescription"
          onChangeText={(inp) => setRecipe({ ...recipe, shortDescription: inp })}
          keyboardType="text"
          value={recipe.shortDescription}
          multiline
          numberOfLines="2"
        />
        <Text style={styles.title}>Instruction</Text>
        <TextInput
          style={styles.inputField}
          name="instruction"
          onChangeText={(inp) => setRecipe({ ...recipe, instruction: inp })}
          keyboardType="text"
          value={recipe.instruction}
          multiline
          numberOfLines="10"
        />
      </View>
      <View style={styles.buttonGroup}>
        <Button style={styles.button} onPress={saveNewRecipe} title="Save" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "#F2EAED", flex: 1 },
  inputGroup: {
    padding: 10,
  },
  buttonGroup: {
    alignItems: "center",

    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: 100,
    float: "center",
  },
  title: {
    fontWeight: "bold",
  },
  inputField: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: "white",
    borderColor: "pink",
    borderStyle: "dotted",
    borderWidth: 1,
  },
});
