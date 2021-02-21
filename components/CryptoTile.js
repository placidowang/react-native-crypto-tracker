import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const CryptoList = ({symbol}) => {
  return (
    <View style={styles.container}>
      <Text>{symbol}</Text>
      <Image 
        style={{width: 20, height: 20, tintColor: '#00ff00'}}
        source={require('../assets/icons/baseline_north_east_black_24dp.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)'
  }
})

export default CryptoList;