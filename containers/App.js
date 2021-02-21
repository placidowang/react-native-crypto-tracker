import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer.js';

import Header from '../components/Header.js';
import Portfolio from './Portfolio.js';
import AddingCryptoScreen from './AddCryptoScreen.js';

const store = createStore(rootReducer);

const App: () => React$Node = () => {
  const [isAddingCrypto, setIsAddingCrypto] = useState(false);

  return (
    <Provider store={store}>
      <Header />
      {isAddingCrypto ? 
        <AddingCryptoScreen setIsAddingCrypto={setIsAddingCrypto} />
        : 
        <Portfolio setIsAddingCrypto={setIsAddingCrypto} />}
    </Provider>
  );
};

export default App;
