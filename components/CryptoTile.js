import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

const CryptoList = () => {
  return (
    <View>
      <Text>CryptoTile</Text>
      <Image 
        style={{width: 20, height: 20, tintColor: '#00ff00'}}
        source={require('../assets/icons/baseline_north_east_black_24dp.png')}/>
    </View>
  )
}

export default CryptoList;