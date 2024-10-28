import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './HeaderStyles';

const HeaderPC = () => {

  return (
    <View style={styles.pcContainer}>
      <Image
        style={styles.logoPC}
        source={require('../../../../assets/Images/logo.png')}
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
  );
};

export default HeaderPC;
