import { Alert } from "react-native";

const initialState = {
  portfolio: [
    'BTC',
    'ETH',
    'DOGE',
    'BUNG',
  ]
}

const rootReducer = (state = initialState, action) => {
  let newPortfolio;
  switch (action.type) {
    case 'addCrypto':
      newPortfolio = [...state.portfolio];
      newPortfolio.push(action.symbol);
      return {...state, portfolio: newPortfolio}
    case 'removeCrypto':
      newPortfolio = [...state.portfolio].filter(
        (c) => c !== action.symbol,
      );
      return {...state, portfolio: newPortfolio};
    case 'refresh':
      const newState = {...state};
      return newState;
    default:
      return state;
  }
}

export default rootReducer;
