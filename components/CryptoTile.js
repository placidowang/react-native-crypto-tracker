import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

const CryptoTile = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({name: `Couldn't find ${props.symbol}!`, market_data: {price_usd: 0.0, percent_change_usd_last_24_hours: 0.0}});

  useEffect(() => {
    fetch(`https://data.messari.io/api/v1/assets/${props.symbol}/metrics`, {
      // headers: { "x-messari-api-key": "MY SECRET KEY"}
    })
      .then(r => r.json())
      .then(d => {
        setIsLoading(false);
        // makes sure you are under messari.io's rate limit
        if (!d.status.error_message) {
          setData(d.data);
        }
      })
  }, []);

  const handlePress = () => {
    props.removeCrypto(props.symbol);
    Alert.alert(props.symbol + ' removed');
  };

  const changeInValue = () => {
    if (data.market_data.percent_change_usd_last_24_hours > 0) {
      return(<>
          <Image
            style={{width: 20, height: 20, tintColor: 'green'}}
            source={require('../assets/icons/baseline_north_east_black_24dp.png')}/>
          <Text style={{fontSize: 16, color: 'green'}}>{data.market_data.percent_change_usd_last_24_hours.toFixed(2)}%</Text>
      </>)
    } else if (data.market_data.percent_change_usd_last_24_hours < 0) {
      return(<>
          <Image 
            style={{width: 20, height: 20, tintColor: 'red'}}
            source={require('../assets/icons/baseline_south_east_black_24dp.png')}/>
          <Text style={{fontSize: 16, color: 'red'}}>{Math.abs(data.market_data.percent_change_usd_last_24_hours).toFixed(2)}%</Text>
      </>)
    } else {
      return(<>
          <Image
            style={{width: 20, height: 20, tintColor: 'grey'}}
            source={require('../assets/icons/baseline_horizontal_rule_black_24dp.png')}/>
          <Text style={{fontSize: 16, color: 'gray'}}>{data.market_data.percent_change_usd_last_24_hours.toFixed(2)}%</Text>
      </>)
    }
  }

  return(<>
      {isLoading ?
        <View style={styles.container}>
          <Text>Searching for {props.symbol}...</Text>
        </View>
        :
        <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.symbol}>{props.symbol}</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.priceUsd}>${data.market_data.price_usd.toPrecision(8)}</Text>
            <View style={{flexDirection: 'row'}}>{changeInValue()}</View>
          </View>
          <TouchableOpacity onPress={handlePress}>
            <Image 
              style={styles.removeIcon}
              source={require('../assets/icons/baseline_remove_circle_outline_black_24dp.png')}/>
          </TouchableOpacity>
        </View>
      }
  </>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
    position: 'absolute',
    right: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  symbol: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.5)',
    // fontWeight: 'bold'
  },
  priceUsd: {
    fontSize: 18,
  },
  removeIcon: {
    width: 28,
    height: 28,
    tintColor: 'rgba(0,0,0,0.3)',
  },
})

const mapDispatchToProps = (dispatch) => {
  return {
    removeCrypto: (symbol) => dispatch({type: 'removeCrypto', symbol: symbol}),
  };
};

export default connect(null, mapDispatchToProps)(CryptoTile);