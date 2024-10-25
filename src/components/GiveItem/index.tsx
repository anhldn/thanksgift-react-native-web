import React from 'react';
import {Image, Text, View, StyleSheet} from "react-native";

const GiveItem: React.FC = () => (
  <View style={{ paddingLeft: 5, paddingRight: 5, marginTop: 10, marginBottom: 15 }}>
    <View style={styles.sectionGive}>
      <Text style={styles.titleNameGive}>
        花岡 真由子 <span style={{fontSize: 12, fontWeight: 400, color: '#828282'}}>さんへ</span>
      </Text>
      <Text style={styles.titleGive}>Happy Birthday コイン</Text>

      <View style={styles.avatarGive}>
        <Image
          style={styles.avatarUser}
          source={require('../../assets/Images/Ellipse 41.png')}
        />
        <View>
          <Image
            style={styles.avatarCoin}
            source={require('../../assets/Images/coin.png')}
          />
          <Image
            style={styles.avatarHand}
            source={require('../../assets/Images/hand.png')}
          />
        </View>
        <Image
          style={styles.avatarUser}
          source={require('../../assets/Images/Ellipse 41.png')}
        />
      </View>
    </View>

    <View>
      <View style={styles.sectionInfoGive}>
        <Text style={styles.titleNameUser}>花岡 真由子</Text>
        <Text style={styles.titleSub}>役員・人事</Text>
      </View>
      <Text style={styles.description}>
        お誕生日おめでとうございます！テキストテキストテキストテキストテキスト... すべて見る
      </Text>

      <View>
        <Text style={styles.times}>2023-11-14 11:12</Text>
        <View>

        </View>
      </View>
    </View>
  </View>

);

const styles = StyleSheet.create({
  times: {
    color: '#BDBDBD',
    fontSize: 12,
    fontWeight: 500,
  },
  description: {
    color: '#828282',
    fontSize: 14,
    fontWeight: 400,
    marginVertical: 5,
  },
  sectionInfoGive: {
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  titleNameUser: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 700,
  },
  titleSub: {
    color: '#828282',
    fontSize: 12,
    fontWeight: 400,
  },
  avatarCoin: {
    width: 48,
    height: 48,
  },
  avatarHand: {
    width: 47,
    height: 20,
  },
  avatarUser: {
    width: 105,
    height: 105,
  },
  titleNameGive: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 10,
  },
  titleGive: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
  },
  sectionGive: {
    backgroundColor: '#F2F4FF',
    borderRadius: '12px',
  },
  avatarGive: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  sectionInfo: {
    backgroundColor: '#F2F4FF',
    height: 180,
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D2089',
    textAlign: 'center',
  },
  cake: {
    width: 115,
    height: 85,
  },
});

export default GiveItem;
