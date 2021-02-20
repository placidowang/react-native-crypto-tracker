import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import CryptoTile from '../components/CryptoTile.js';

const CryptoList = () => {
  return (
    <>
      <View style={styles.list}>
        <Text style={styles.title}>CryptoList</Text>
        <CryptoTile />
        <CryptoTile />
        <CryptoTile />
        <CryptoTile />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    // backgroundColor: '#dfdfdf'
  },
  title: {
    fontSize: 24
    
  }
})

export default CryptoList;