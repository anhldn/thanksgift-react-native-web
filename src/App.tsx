import React from 'react';
import { View, StyleSheet } from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import Header from "./components/header";
import GiveItem from "./components/GiveItem";
import Search from "./components/Search";

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

const App: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'すべて' },
    { key: '2', title: '事務局' },
    { key: '3', title: '管理部' },
  ]);

  return (
    <View style={styles.container}>
      <Header />
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

export default App;
