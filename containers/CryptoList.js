import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import CryptoTile from '../components/CryptoTile.js';

const CryptoList = (props) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Portfolio</Text> */}
      {/* <Text>Portfolio: {props.portfolio}</Text> */}
      
      {
        props.portfolio.map(symbol => <CryptoTile symbol={symbol} />)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#dfdfdf'
    flex: 1,
    alignItems: 'stretch',

    borderWidth: 1,
    padding: 20,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  }
})

const mapStateToProps = (state) => {
  const { portfolio } = state;
  return { portfolio }
}

export default connect(mapStateToProps)(CryptoList);