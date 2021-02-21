import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';



const CryptoTile = ({symbol}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({name: '', market_data: {price_usd: 0.0, percent_change_usd_last_24_hours: 0.0}});

  useEffect(() => {
    fetch(`https://data.messari.io/api/v1/assets/${symbol}/metrics`)
      .then(r => r.json())
      .then(d => {
        setIsLoading(false);
        setData(d.data);
      })
  }, []);

  const changeInValue = () => {
    if (data.market_data.percent_change_usd_last_24_hours > 0) {
      return(
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 20, height: 20, tintColor: 'green'}}
            source={require('../assets/icons/baseline_north_east_black_24dp.png')}/>
          <Text style={{color: 'green'}}>{data.market_data.percent_change_usd_last_24_hours.toFixed(2)}%</Text>
        </View>
      )
    } else if (data.market_data.percent_change_usd_last_24_hours < 0) {
      return(
        <View style={{flexDirection: 'row'}}>
          <Image 
            style={{width: 20, height: 20, tintColor: 'red'}}
            source={require('../assets/icons/baseline_south_east_black_24dp.png')}/>
          <Text style={{color: 'red'}}>{Math.abs(data.market_data.percent_change_usd_last_24_hours).toFixed(2)}%</Text>
        </View>
      )
    } else {
      return(
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 20, height: 20, tintColor: 'grey'}}
            source={require('../assets/icons/baseline_horizontal_rule_black_24dp.png')}/>
          <Text style={{color: 'gray'}}>{data.market_data.percent_change_usd_last_24_hours.toFixed(2)}%</Text>
        </View>
      )
    }
  }

  return (
    <>
      {isLoading ?
        <View style={styles.container}>
          <Text>Searching for {symbol}...</Text>
        </View>
        :
        <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.symbol}>{symbol}</Text>

          </View>
          <View style={styles.right}>
            <Text style={styles.priceUsd}>${data.market_data.price_usd.toPrecision(8)}</Text>
            {changeInValue()}
          </View>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  left: {

  },
  right: {
    alignItems: 'flex-end',
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
  },
  changePos: {
    flexDirection: 'row',
    color: 'green',
  },
  changeNeg: {
    flexDirection: 'row',
  },
  changeNon: {
    flexDirection: 'row',
  },
})

export default CryptoTile;