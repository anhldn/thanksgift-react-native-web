import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';

const Header = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 1024; // Xác định màn hình PC hoặc smartphone dựa trên độ rộng

  return (
    <View>
      {isLargeScreen ? (
        // Header cho màn hình lớn (PC)
        <View style={styles.pcContainer}>
          <Image
            style={styles.logoPC}
            source={require('../../assets/Images/logo.png')}
          />

          <View style={styles.pcItem}>
            <Text>コイン</Text>
          </View>
          <View style={styles.pcItem}>
            <Text>ニュース</Text>
          </View>
          <View style={styles.pcItem}>
            <Text>ランキング</Text>
          </View>
          <View style={styles.pcItem}>
            <Text>その他</Text>
          </View>
          <Text style={styles.pcPoints}>保有ポイント：1,000 pt</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.avatarLogoAlertSP}
              source={require('../../assets/Images/mdi_bell-notification-outline.png')}
            />
            <Image
              style={styles.avatarLogoSP}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>
        </View>
      ) : (
        // Header cho smartphone
        <View style={styles.mobileContainer}>
          <Image
            style={styles.avatarLogoSP}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <View>
            <Image
              style={styles.logoSP}
              source={require('../../assets/Images/logo.png')}
            />
          </View>
          <Image
            style={styles.avatarLogoAlertSP}
            source={require('../../assets/Images/mdi_bell-notification-outline.png')}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoPC: {
    width: 200,
    height: 60,
  },
  logoSP: {
    width: 200,
    height: 40,
  },
  avatarLogoSP: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  pcHeader: {
    flexDirection: 'row',
  },
  mobileHeader: {
    flexDirection: 'row',
  },
  pcContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  mobileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  pcText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  pcItem: {
    marginHorizontal: 8,
  },
  pcPoints: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  companyName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  poweredBy: {
    fontSize: 12,
    color: '#888',
  },
  notificationIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  avatarLogoAlertSP: {
    width: 30,
    height: 30,
    borderRadius: 50,
  }
});

export default Header;
