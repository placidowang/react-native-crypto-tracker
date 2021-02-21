import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import rootReducer from '../reducers/rootReducer.js';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// import { Provider as MaterialIconProvider } from 'material-design-icons';
import Header from './Header.js';
import CryptoList from './CryptoList.js';

const store = createStore(rootReducer);

const theme = {
  ...DefaultTheme,
};

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Header />
        <View style={{flex: 1, height: 'auto'}}>
          <ScrollView>
            <CryptoList />
          </ScrollView>
        </View>
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
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
