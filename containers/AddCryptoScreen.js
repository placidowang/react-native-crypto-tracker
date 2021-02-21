import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

const AddCryptoScreen = (props) => {
  const [value, onChangeText] = useState('');

  const handlePress = () => {
    const symbol = value.toUpperCase();
    if (props.portfolio.includes(symbol)) {
      Alert.alert(`You already have ${symbol}!`)
    } else {
      props.addCrypto(symbol);
      props.setIsAddingCrypto(false);
    }
  };

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Enter Symbol</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize={'characters'}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <View style={styles.addBtn}>
        <Button 
          title='Add!'
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height: 'auto',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
  },
  textInput: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
  },
  addBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

const mapStateToProps = (state) => {
  const { portfolio } = state;
  return { portfolio }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCrypto: (symbol) => dispatch({type: 'addCrypto', symbol: symbol}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCryptoScreen);