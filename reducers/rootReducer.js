import { Alert } from "react-native";

const initialState = {
  portfolio: [
    'BTC',
    'ETH',
    'DOGE',
    'EOS',
    'XTZ',
    'DOGE',
    'EOS',
    'XTZ',
    // 'BUNG',
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addCrypto':
      return {...state
      
      }
    case 'removeCrypto':
      const newPortfolio = [...state.portfolio].filter(
        (c) => c !== action.symbol,
      );
      return {...state, portfolio: newPortfolio};
    default:
      return state;
  }
}

export default rootReducer;