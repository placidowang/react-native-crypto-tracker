import React from 'react';
import CryptoList from './CryptoList.js';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

const Portfolio = (props) => {
  const handlePress = () => {
    props.setIsAddingCrypto(true);
  };

  const handleRefresh = async () => {
    await props.setIsAddingCrypto(true);
    props.setIsAddingCrypto(false);
  };

  return(
    <View style={{flex: 1}}>
      <ScrollView>
        <CryptoList />
        <TouchableOpacity style={styles.addCrypto} onPress={handlePress}>
          <Image 
            style={styles.addIcon}
            source={require('../assets/icons/baseline_add_circle_outline_black_24dp.png')}/>
          <Text>Add Cryptocurrency</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* <View style={{height: 60, flex: 1}}> */}
        <TouchableOpacity 
          // title='refresh'
          style={styles.refreshBtn}
          onPress={handleRefresh}>
          <Text style={styles.refreshBtnTxt}>Refresh</Text>
        </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  addCrypto: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  addIcon: {
    width: 32,
    height: 32,
    tintColor: 'rgba(0,0,0,0.3)',
  },
  refreshBtn: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#257985',
  },
  refreshBtnTxt: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default Portfolio;