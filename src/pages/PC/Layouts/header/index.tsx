import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './HeaderStyles';

const HeaderPC = () => {

  return (
    <View>
      <View style={styles.pcSection}>
        <Image
          style={styles.logoPC}
          source={require('../../../../assets/Images/logo.png')}
        />

        <View style={styles.pcItem}>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require('../../../../assets/Images/coinLogo.png')}
          />
          <Text style={styles.titleMenu}>コイン</Text>
        </View>
        <View style={styles.pcItem}>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require('../../../../assets/Images/news.png')}
          />
          <Text style={styles.titleMenu}>ニュース</Text>
        </View>
        <View style={styles.pcItem}>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require('../../../../assets/Images/ranking.png')}
          />
          <Text style={styles.titleMenu}>ランキング</Text>
        </View>
        <View style={styles.pcItem}>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require('../../../../assets/Images/Icon.png')}
          />
          <Text style={styles.titleMenu}>その他</Text>
        </View>
        <Text style={styles.pcPoints}>保有ポイント：1,000 pt</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.avatarLogoAlertSP}
            source={require('../../../../assets/Images/mdi_bell-notification-outline.png')}
          />
          <Image
            style={styles.avatarLogoSP}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderPC;
