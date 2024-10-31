import React from 'react';
import {useWindowDimensions, View} from "react-native";
import HomePC from "./pages/PC/Home";
import HomeSP from "./pages/SP/Home";

const App: React.FC = () => {

  const { width } = useWindowDimensions();
  const isLargeScreen = width > 1024; // Xác định màn hình PC hoặc smartphone dựa trên độ rộng

  return (
    <View>
      {isLargeScreen ? <HomePC /> : <HomeSP />}
    </View>
  );
};


export default App;
