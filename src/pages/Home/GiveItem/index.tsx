import React from 'react';
import {Image, Text, View} from "react-native";
import styles from './GiveItemStyles';

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
          source={require('../../../assets/Images/Ellipse 41.png')}
        />
        <View>
          <Image
            style={styles.avatarCoin}
            source={require('../../../assets/Images/coin.png')}
          />
          <Image
            style={styles.avatarHand}
            source={require('../../../assets/Images/hand.png')}
          />
        </View>
        <Image
          style={styles.avatarUser}
          source={require('../../../assets/Images/Ellipse 41.png')}
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

export default GiveItem;
