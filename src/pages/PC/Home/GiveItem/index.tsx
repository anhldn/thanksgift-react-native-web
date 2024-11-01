import React from 'react';
import { FlatList, Image, Text, View } from "react-native";
import styles from './GiveItemStyles';
import coinHistoryMock from '../../../../mocks/coinHistoryMock';

const GiveItemPC: React.FC = () => {
  // const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.app}>
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
                {item.comment.length > 50 ? item.comment.substring(0, 60) + '...' : item.comment}
              </Text>

              <View style={styles.actionComment}>
                <Text style={styles.times}>{item.send_time}</Text>
                <View style={styles.sectionIcon}>
                  <View style={styles.sectionHeart}>
                    <Image
                      style={{ width: 24, height: 24 }}
                      source={require('../../../../assets/Images/tabler_photo.png')}
                    />
                    <Text style={{ marginLeft: 10 }}>45</Text>
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    <Image
                      style={{ width: 18, height: 18 }}
                      source={require('../../../../assets/Images/chat.png')}
                    />
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    <Image
                      style={{ width: 18, height: 18 }}
                      source={require('../../../../assets/Images/iconoir.png')}
                    />
                  </View>
                  <View style={styles.sectionHeart}>
                    <Image
                      style={{ width: 18, height: 18 }}
                      source={require('../../../../assets/Images/heart.png')}
                    />
                    <Text style={{ marginLeft: 10 }}>45</Text>
                  </View>
                </View>
              </View>

            </View>
          )}
        />
    </View>
  );
};

export default GiveItemPC;
