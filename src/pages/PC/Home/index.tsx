import {View, StyleSheet} from "react-native";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import React from "react";
import SearchPC from "./Search";
import GiveItemPC from "./GiveItem";
import HeaderPC from "../Layouts/header";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#e30d1e' }} />
);

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
  3: ThirdRoute,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'blue' }}
    style={{
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#bdbdbd',
    }}
    activeColor="blue"
    inactiveColor="gray"
  />
);

const HomePC = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'すべて' },
    { key: '2', title: '事務局' },
    { key: '3', title: '管理部' },
  ]);

  return (
    <View style={styles.container}>
      <HeaderPC />

      <SearchPC />

      <View style={{ width: '30%' }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
        />
      </View>

      <GiveItemPC />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D2089',
    textAlign: 'center',
  },
  titleBy: {
    fontSize: 14,
    textAlign: 'center',
    color: '#1D2089',
  },
  avatarLogo: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});

export default HomePC;
