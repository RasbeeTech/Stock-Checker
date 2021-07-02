<h1 align="center">Welcome to Stock-Checker 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/RasbeeTech/Stock-Checker#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/RasbeeTech/Stock-Checker/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/RasbeeTech/Stock-Checker/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/RasbeeTech/Stock-Checker" />
  </a>
</p>

> API service for checking NASDAQ stock prices.

## Install

```sh
npm install
```

## Usage

```sh
npm start
```
#### Usage examples:  
Retrieve stock price:    
```
GET /api/stock-prices?stock=GOOG
```
Retrieve up to 2 stock prices:      
```
GET /api/stock-prices?stock=GOOG&stock=MFST
```
Like a stock:
```
GET /api/stock-prices?stock=GOOG&like=true
```
#### Return example:  
Query one stock price:  
```
{"stockData": {"stock": "GOOG", "price": 2448.89, "likes": 9}}  
```
Query two stock prices:  
```
{"stockData": [{"stock": "GOOG", "price": 2448.89, "likes": 9}, {"stock": "MFST", "price": 271.89, "likes": 5}]}
```
## Run tests

```sh
npm run test
```

## Author

👤 **RasbeeTech**

* Website: linkedin.com/in/mykalbailey/
* Github: [@RasbeeTech](https://github.com/RasbeeTech)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [RasbeeTech](https://github.com/RasbeeTech).<br />
This project is [MIT](https://github.com/RasbeeTech/Stock-Checker/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
