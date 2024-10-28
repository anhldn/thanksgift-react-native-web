import React from 'react';
import {Image, ImageBackground, Text, View} from "react-native";
import styles from './SearchStyles';

const Search: React.FC = () => (
  <View style={styles.sectionInfo}>
    <Text style={styles.yourMoney}>
      <ImageBackground style={{width: 180, height: 80}} source={require('../../assets/Images/Vector.png')} resizeMode="cover">
        <Text style={[styles.title, { marginTop: 25 }]}>あなたの保有コイン</Text>
      </ImageBackground>
      <Text style={styles.title}>1,000 pt</Text>
    </Text>

    <Text style={styles.sectionSearch}>
      <Text style={styles.titleSearch}>コインアクティビティ</Text>
      <Image
        style={styles.avatarLogo}
        source={require('../../assets/Images/MagnifyingGlass.png')}
      />
    </Text>
  </View>
);


export default Search;
