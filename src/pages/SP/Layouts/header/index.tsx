import React from 'react';
import {View, Image} from 'react-native';
import styles from './HeaderStyles';

const HeaderSP = () => {

  return (
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
          source={require('../../../../assets/Images/logo.png')}
        />
      </View>
      <Image
        style={styles.avatarLogoAlertSP}
        source={require('../../../../assets/Images/mdi_bell-notification-outline.png')}
      />
    </View>
  );
};

export default HeaderSP;
