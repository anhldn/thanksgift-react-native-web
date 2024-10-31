import React from 'react';
import {TextInput, TouchableOpacity, Text, View} from "react-native";
import styles from './SearchStyles';

const SearchPC: React.FC = () => (
  <View style={styles.sectionInfo}>
    <View style={styles.yourMoney}>
      <Text style={styles.titleCoin}>コイン</Text>
      <Text style={styles.titleTypeCoin}>コインの種類について</Text>
    </View>

    <View style={styles.sectionSearch}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="フリーワードで検索"
          placeholderTextColor="#aaa"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>検索条件</Text>
      </TouchableOpacity>
    </View>

  </View>
);


export default SearchPC;
