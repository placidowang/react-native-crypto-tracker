import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';



const CryptoTile = ({symbol}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({name: 'moneymoney'});

  useEffect(() => {
    fetch(`https://data.messari.io/api/v1/assets/${symbol}/metrics`)
      .then(r => r.json())
      .then(d => {
        setIsLoading(false);
        setData(d.data);
      })
  }, []);

  return (
    <>
      {isLoading ?
        <View style={styles.container}>
          <Text>Searching for {symbol}...</Text>
        </View>
        :
        <View style={styles.container}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
          <Text style={styles.priceUsd}>${data.market_data.price_usd}</Text>
          <Text>{data.market_data.percent_change_usd_last_24_hours.toFixed(2)}%</Text>
          <Image 
            style={{width: 20, height: 20, tintColor: 'green'}}
            source={require('../assets/icons/baseline_north_east_black_24dp.png')}/>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 100,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  name: {
    fontSize:24,
    fontWeight: 'bold'
  },
  symbol: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.5)',
    // fontWeight: 'bold'
  },
  priceUsd: {
    fontSize: 20,
  }
})

export default CryptoTile;