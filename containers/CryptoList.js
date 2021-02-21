import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet
} from 'react-native';

import CryptoTile from '../components/CryptoTile.js';

let i = 0;

const CryptoList = (props) => {
  return (
    <View style={styles.container}>
      {props.portfolio.map((symbol) => {
        i++;
        return <CryptoTile symbol={symbol} key={i}/>
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  },
});

const mapStateToProps = (state) => {
  const { portfolio } = state;
  return { portfolio }
};

export default connect(mapStateToProps)(CryptoList);