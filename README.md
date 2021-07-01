# Stock-Checker
 API service for checking NASDAQ stock prices.
 
 ### Purpose:
 * **App**: Provide a means for checking for stock prices while giving users an option to 'like' a stock (one like per ip address).   
 * **Information security**:  Using Helmet.js to protect application from security threats.  
 * **Testing**: unit and integrated Mocha Chai-HTTP testing.    
 
## Install
To install Stock-Checker, navigate to the root project folder and run the npm install command script:
```
npm install
```

## Usage examples:
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

## Return example:
Query one stock price:  
```
{"stockData": {"stock": "GOOG", "price": 2448.89, "likes": 9}}  
```
Query two stock prices:  
```
{"stockData": [{"stock": "GOOG", "price": 2448.89, "likes": 9}, {"stock": "MFST", "price": 271.89, "likes": 5}]}
```
