import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const Header: React.FC = () => (
  <View style={styles.header}>
    <Image
      style={styles.avatarLogo}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
    />
    <View>
      <Text style={styles.title}>株式会社相馬薬品工業</Text>
      <Text style={styles.titleBy}>Powered by THANKS GIFT</Text>
    </View>
    <Image
      style={styles.avatarLogo}
      source={require('../../assets/Images/mdi_bell-notification-outline.png')}
    />
  </View>
);

const styles = StyleSheet.create({
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  }
});


export default Header;
