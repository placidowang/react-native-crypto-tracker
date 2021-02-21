const initialState = {
  portfolio: [
    'BTC',
    'ETH',
    'DOGE',
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addCrypto':
      return {...state
      
      }
    case 'removeCrypto':
      return {...state
      
      }
    default:
      return state
  }
}

export default rootReducer;