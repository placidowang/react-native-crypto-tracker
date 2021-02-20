import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Header = () => {
  return (
    <>
      {/* <View style={styles.list}> */}
        <Text style={styles.title}>Header</Text>
      {/* </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#dfdfdf'
  },
  title: {
    fontSize: 48
    
  }
})

export default Header;