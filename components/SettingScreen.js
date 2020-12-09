import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import * as Brightness from "expo-brightness";
import i18n from "i18n-js";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { initChangeLanguage } from "../redux/store";
import { getTranslatedText } from "./Translation";
export default function SettingScreen() {
  const [notGranted, setNotGranted] = React.useState(null);
  const appState = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status !== "granted") {
        setNotGranted("Sorry, we need permissions to make this work!");
      }
    })();
  }, []);

  const changeLanguage = (value, index) => {
    dispatch(initChangeLanguage(value));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{getTranslatedText("settings")}</Text>
      </View>
      <View style={styles.lightness}>
        <Text style={{ textAlign: "center" }}> {getTranslatedText("lightness")}</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={async (value) => await Brightness.setSystemBrightnessAsync(value)}
        />
      </View>
      <Text style={{ color: "red" }}>{notGranted === null ? "" : notGranted}</Text>
      <View style={styles.lightness}>
        <Text style={{ textAlign: "center" }}>{getTranslatedText("language")}</Text>
        <Picker
          selectedValue={appState.language}
          style={{ height: 50, width: 200 }}
          onValueChange={changeLanguage}
        >
          <Picker.Item key={"EN"} label={"English"} value={"EN"} />
          <Picker.Item key={"FI"} label={"Suomi"} value={"FI"} />
          <Picker.Item key={"SYSTEM"} label={"System"} value={"SYSTEM"} />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#F2EAED", flex: 1, padding: 10 },
  lightness: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  buttonGroup: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
});
