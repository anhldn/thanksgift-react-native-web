import HeaderSP from "../Layouts/SP/header";
import HeaderPC from "../Layouts/PC/header";
import Search from "./Search";
import {StyleSheet, useWindowDimensions, View} from "react-native";
import {SceneMap, TabView} from "react-native-tab-view";
import GiveItem from "./GiveItem";
import React from "react";

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

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'すべて' },
    { key: '2', title: '事務局' },
    { key: '3', title: '管理部' },
  ]);
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 1024; // Xác định màn hình PC hoặc smartphone dựa trên độ rộng
  return (
    <View style={styles.container}>
      {isLargeScreen ? <HeaderPC /> : <HeaderSP />}

      <Search />

      <View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
        />
      </View>

      <GiveItem />
      <GiveItem />

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

export default Home;
