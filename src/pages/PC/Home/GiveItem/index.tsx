import React from 'react';
import {FlatList, Image, Text, View} from "react-native";
import styles from './GiveItemStyles';
import coinHistoryMock from '../../../../mocks/coinHistoryMock';

const GiveItemPC: React.FC = () => (

  <View style={styles.app}>
    <View style={styles.container}>
    <FlatList
      data={coinHistoryMock}
      numColumns={3}
      renderItem={({ item }) => (
        <View style={styles.mainItem}>
          <Text style={styles.title}>BE RESPECTEDコイン</Text>
          <View style={styles.sectionInfo}>
            <Text style={styles.title}>花岡 真由子</Text>
            <Image
              style={styles.arrow}
              source={require('../../../../assets/Images/flowbite.png')}
            />
            <Text style={styles.title}>若林 郁未</Text>
          </View>

          <View style={styles.avatarGive}>
            <Image
              style={styles.avatarUser}
              source={require('../../../../assets/Images/Ellipse 41.png')}
            />
            <View>
              <Image
                style={styles.avatarCoin}
                source={require('../../../../assets/Images/coin.png')}
              />
              <Image
                style={styles.avatarHand}
                source={require('../../../../assets/Images/hand.png')}
              />
            </View>
            <Image
              style={styles.avatarUser}
              source={require('../../../../assets/Images/Ellipse 41.png')}
            />
          </View>

          <Text style={styles.description}>
            {item.comment}
          </Text>

          <View>
            <Text style={styles.times}>{item.send_time}</Text>
          </View>

        </View>
      )}
    />
    </View>
  </View>
);


export default GiveItemPC;
