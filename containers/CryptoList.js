import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import CryptoTile from '../components/CryptoTile.js';

const CryptoList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CryptoList</Text>
      <CryptoTile />
      <CryptoTile />
      <CryptoTile />
      <CryptoTile />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#dfdfdf'
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    
  }
})

export default CryptoList;