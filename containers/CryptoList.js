import React from 'react';
import { Text } from 'react-native';

import CryptoTile from '../components/CryptoTile.js';

const CryptoList = () => {
  return (
    <>
      <Text>CryptoList</Text>
      <CryptoTile />
      <CryptoTile />
      <CryptoTile />
      <CryptoTile />
    </>
  )
}

export default CryptoList;