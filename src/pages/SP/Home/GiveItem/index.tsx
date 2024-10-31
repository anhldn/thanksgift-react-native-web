import React from 'react';
import { Image, Text, View, FlatList } from "react-native";
import styles from './GiveItemStyles';
import coinHistoryMock from '../../../../mocks/coinHistoryMock';

const GiveItemSP: React.FC = () => (


  <FlatList
    data={coinHistoryMock}
    renderItem={({ item }) => (
      <View style={{ paddingLeft: 5, paddingRight: 5, marginTop: 10, marginBottom: 15 }}>
        <View style={{ marginBottom: 15 }}>
          <View style={styles.sectionGive}>
            <Text style={styles.titleNameGive}>
              花岡 真由子 <span style={{fontSize: 12, fontWeight: 400, color: '#828282'}}>さんへ</span>
            </Text>
            <Text style={styles.titleGive}>Happy Birthday コイン</Text>

            <View style={styles.avatarGive}>
              <Image
                style={styles.avatarUser}
                source={{ uri: item.sender_avatar }}
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
                source={{ uri: item.receiver_avatar }}
              />
            </View>
          </View>

          {/*<View style={styles.sectionInfoGive}>*/}
          {/*  <Text style={styles.titleNameUser}>花岡 真由子</Text>*/}
          {/*  <Text style={styles.titleSub}>役員・人事</Text>*/}
          {/*</View>*/}

          <Text style={styles.description}>
            {item.comment}
          </Text>

          <View>
            <Text style={styles.times}>{item.send_time}</Text>
          </View>
        </View>
      </View>
    )}
  />
);

export default GiveItemSP;
