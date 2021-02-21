import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet } from 'react-native';
import rootReducer from '../reducers/rootReducer.js';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Header from '../components/Header.js';
import Portfolio from './Portfolio.js';
import AddingCryptoScreen from './AddCryptoScreen.js';

const store = createStore(rootReducer);

const theme = {
  ...DefaultTheme,
};

const App: () => React$Node = () => {
  const [isAddingCrypto, setIsAddingCrypto] = useState(false);

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Header />
        {isAddingCrypto ? 
          <AddingCryptoScreen setIsAddingCrypto={setIsAddingCrypto} />
          : 
          <Portfolio setIsAddingCrypto={setIsAddingCrypto} />}
      </PaperProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#2b2b2b',

  },
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    // backgroundColor: Colors.white,
    // height: '100px',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    // color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    // color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    // color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
