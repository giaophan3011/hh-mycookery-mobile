import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, View, Button, Text, TextInput, Alert, Image } from "react-native";

export default function Appbar() {
  return (
    <View style={styles.appbarRoot}>
      <Text style={styles.appbarTitle}>My Cookery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appbarRoot: {
    flexDirection: "row",
    paddingTop: 25,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  appbarTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
