import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/icons/baseline_insights_black_24dp.png')}/>
        <Text style={styles.title}>Crypto Tracker</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 48,
    height: 48,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
  }
})

export default Header;