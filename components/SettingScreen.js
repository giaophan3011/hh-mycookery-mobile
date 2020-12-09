import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import * as Brightness from "expo-brightness";
import { Divider } from "react-native-paper";
export default function SettingScreen() {
  const [notGranted, setNotGranted] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status !== "granted") {
        setNotGranted("Sorry, we need permissions to make this work!");
      }
    })();
  }, []);

  const askPermission = async () => {
    const { status } = await Brightness.requestPermissionsAsync();
    if (status === "granted") {
      setNotGranted("Sorry, we need permissions to make this work!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.title}>Settings</Text>

        <Text>Lightness</Text>
        <Text style={{ color: "red" }}>{notGranted === null ? "" : notGranted}</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={async (value) => await Brightness.setSystemBrightnessAsync(value)}
        />
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
});
