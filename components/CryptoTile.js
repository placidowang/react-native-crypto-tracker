import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';



const CryptoTile = ({symbol}) => {
  const [data, setData] = useState(null);

  fetch(`https://data.messari.io/api/v1/assets/${symbol}/metrics`)
    .then(r => r.json())
    .then(data => {
      setData(data.data);
    }, [])

  return (
    <View style={styles.container}>
    {data ?
      <View>
          <Text>{data.name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
          <Image 
            style={{width: 20, height: 20, tintColor: 'green'}}
            source={require('../assets/icons/baseline_north_east_black_24dp.png')}/>
        </View> :
        <View>
          <Text>Couldn't find {symbol}!</Text>
        </View>
        }
        </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  symbol: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default CryptoTile;