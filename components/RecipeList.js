import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { initGetRecipes } from "../redux/store";
import salad from "../assets/images/salad.jpg";
import soup from "../assets/images/soup.webp";
import appetizer from "../assets/images/appetizer.jpg";
import bread from "../assets/images/bread.jpg";
import drink from "../assets/images/drinks.jpg";
import dessert from "../assets/images/dessert.jpg";
import sideDish from "../assets/images/side_dish.jpg";
import mainDish from "../assets/images/main_dish.jpg";

export default function RecipeList() {
  const recipeState = useSelector((state) => state.recipeReducer);
  const dispatch = useDispatch();
  useEffect(() => dispatch(initGetRecipes()), []);
  console.log(recipeState.recipes);
  return (
    <View style={styles.scrollableList}>
      {recipeState.recipes.isEmpty ? (
        <Text>No recipe</Text>
      ) : (
        <FlatList
          nestedScrollEnabled={true}
          data={recipeState.recipes}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      )}
    </View>
  );
}

const ListItem = ({ item }) => {
  const getCardMedia = () => {
    switch (item.category) {
      case "soup":
        return soup;
      case "appetizer":
        return appetizer;
      case "salads":
        return salad;
      case "bread":
        return bread;
      case "drink":
        return drink;
      case "dessert":
        return dessert;
      case "side_dish":
        return sideDish;
      default:
        return mainDish;
    }
  };
  return (
    <View key={item.id} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text>{item.category}</Text>
      </View>
      <Image style={styles.image} source={getCardMedia()} />
      <View style={styles.textContainer}>
        <Text>{item.shortDescription}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollableList: {
    flex: 1,
  },
  container: {
    width: "100%",
    height: 200,
    marginBottom: 25,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },

  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
