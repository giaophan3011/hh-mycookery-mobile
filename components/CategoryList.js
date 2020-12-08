import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const initialLayout = { width: Dimensions.get("window").width };

const CategoryList = (props) => {
  const [index, setIndex] = React.useState(0);
  const { categories } = props;

  const routes = categories.map((c) => ({ key: c.key, title: c.key }));

  const renderScene = SceneMap(Object.assign(...categories.map((c) => ({ [c.key]: c.scene }))));

  const renderTabBar = (props) => <TabBar {...props} scrollEnabled tabStyle={styles.tabStyle} />;

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      scrollEnabled
      tabStyle={{ width: 100 }}
    />
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    width: 100,
  },
});

export default CategoryList;
