import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const initialLayout = { width: Dimensions.get("window").width };

const CategoryList = (props) => {
  const [index, setIndex] = React.useState(0);
  const { categories } = props;

  const routes = categories.map((c) => ({ key: c.key, title: c.key }));

  const renderScene = SceneMap(Object.assign(...categories.map((c) => ({ [c.key]: c.scene }))));

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      tabStyle={styles.tabStyle}
      activeColor="#53112B"
      inactiveColor="#53112B"
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      scrollEnabled
      tabStyle={{ width: 100, backgroundColor: "#F7EDF1", color: "#53112B" }}
    />
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    width: 100,
    color: "#53112B",
    backgroundColor: "#F7F2F4",
  },
});

export default CategoryList;
