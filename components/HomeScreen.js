import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Appbar from "./Appbar";
import RecipeList from "./RecipeList";
export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <Text>This is HomeScreen</Text>
      <RecipeList />
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
