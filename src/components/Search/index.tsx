import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";

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

const styles = StyleSheet.create({
  sectionInfo: {
    backgroundColor: '#F2F4FF',
    height: 180,
    position: 'relative',
  },
  yourMoney: {
    borderRadius: '24px',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    top: 40,
    alignItems: 'center'
  },
  sectionSearch: {
    position: 'absolute',
    padding: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    top: 130,
  },
  titleSearch: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F103C',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D2089',
    textAlign: 'center',
  },
  avatarLogo: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});


export default Search;
