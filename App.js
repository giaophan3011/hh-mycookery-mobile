import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Appbar from "./components/Appbar";
import HomeScreen from "./components/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AddRecipe from "./components/AddRecipe";
import SettingScreen from "./components/SettingScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.root}>
      <Appbar style={styles.appbar} />
      <NavigationContainer style={styles.content}>
        <Tab.Navigator
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: "#694fad" }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="New"
            component={AddRecipe}
            options={{
              tabBarLabel: "New recipe",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="plus" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingScreen}
            options={{
              tabBarLabel: "Setting",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="settings" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  appbar: {
    flex: 1,
    justifyContent: "flex-start",
  },
  content: {
    flex: 5,
    backgroundColor: "#F0FFFF",
    justifyContent: "center",
    marginBottom: 10,
  },
});
