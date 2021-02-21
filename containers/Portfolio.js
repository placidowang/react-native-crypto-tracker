import React from 'react';
import { connect } from 'react-redux';
import CryptoList from './CryptoList.js';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const Portfolio = (props) => {
  const handlePress = () => {
    props.setIsAddingCrypto(true);
  };

  const handleRefresh = () => {
    props.refresh();
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
      <Button 
        title='refresh'
        onPress={handleRefresh} />
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
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch({type: 'refresh'}),
  };
};

export default connect(null, mapDispatchToProps)(Portfolio);