import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
        <Image
          style={styles.icon}
          source={require('../assets/icons/insights-24px.svg')}/>
        <Text style={styles.title}>Crypto Tracker</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000'
  },
  icon: {
    width: 64,
    height: 64,
    color: '#ffffff'
  },
  title: {
    fontSize: 24,
    fontWeight: '600'
  }
})

export default Header;