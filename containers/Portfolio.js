import React from 'react';
import CryptoList from './CryptoList.js';
import {
  ScrollView,
  View,
} from 'react-native';

const Portfolio = () => {
  return(
    <>
      <View style={{flex: 1, height: 'auto'}}>
        <ScrollView>
          <CryptoList />
        </ScrollView>
      </View>
    </>
  );
};

export default Portfolio;