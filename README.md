# Coding Challenge - React Native Crypto Tracker

### How to start
Have Android Virtual Device or Android Device running. Then run:
```
npm install
npx react-native start
```
### How to use
Crypto Tracker checks the current value in USD and percent change in value in USD of the cryptocurrencies in your portfolio. You should start with a few cryptocurrencies already in your portfolio.

You can add any cryptocurrency by pressing "Add Cryptocurrency" and entering the symbol (unless it's already in your portfolio). For example, try adding XRP or LTC. Press the Remove button on the right of each cryptocurrency to remove it from your portfolio.

You can also refresh to see the latest values in your portfolio.

If it seems like you're not retrieving any information, you can uncomment line 23 in './components/CryptoTile.js' and add your API Key to see if you're hitting a rate limit.

Enjoy!

Uses React Native, Redux, and Messari API.