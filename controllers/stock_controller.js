const fetch = require('node-fetch');
const { Stock } = require('./mongodb_schemas.js');

const url = 'https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/';

class Stocks {
  getStockData = (stock_symbol, like, ipAddr, done) => {
    if(Array.isArray(stock_symbol)){
      fetch(url + stock_symbol[0] + '/quote')
      .then((data) => data.json())
      .then((res) => {
        this.getStockLikes(stock_symbol[0], like, ipAddr, (err, stockLikes) => {
          if(err) return 'Something went wrong';
          let stock_arr = [{
            stock: res.symbol,
            price: res.latestPrice,
            rel_likes: stockLikes
          }];
          fetch(url + stock_symbol[1] + '/quote')
          .then((data) => data.json())
          .then((res) => {
            this.getStockLikes(stock_symbol[0], like, ipAddr, (err, stockLikes) => {
              stock_arr.push({
                stock: res.symbol,
                price: res.latestPrice,
                rel_likes: stockLikes - stock_arr[0].rel_likes
              });
              stock_arr[0].rel_likes = stock_arr[0].rel_likes - stock_arr[1].rel_likes
              done(null, stock_arr);
            });
          });
        });
      });

    } else {
      fetch(url + stock_symbol + '/quote')
      .then((data) => data.json())
      .then((res) => {
        this.getStockLikes(stock_symbol, like, ipAddr, (err, stockLikes) => {
          if(err) return 'Something went wrong';
          let stock_data = {
            stock: res.symbol,
            price: res.latestPrice,
            likes: stockLikes
          }
          done(null, stock_data);
        });
      });
    }
  };

  getStockLikes = (stock_symbol, like, ipAddr, done) => {
    Stock.findOne({stockSymbol: stock_symbol}, (err, foundStock) => {
      if(err) return 'Something went wrong';
      if(foundStock){
        if(like && !foundStock.likes.includes(ipAddr)){
          foundStock.likes.push(ipAddr);
          
          foundStock.save((err, UpdatedStockRecord) => {
            if(err) return 'Something went wrong';
            return done(null, UpdatedStockRecord.likes.length);
          })
        }
        done(null, foundStock.likes.length);
      }
      else {
        return this.createStockRecord(stock_symbol,  like, ipAddr, (err, stockData) => {
          if(err) return 'Something went wrong';
          done(stockData.likes.length);
        })
      }
    })
  };

  createStockRecord = (stock_symbol, like, ipAddr, done) => {
    let newStockRecord = new Stock({
      stockSymbol: stock_symbol,
      likes: []
    });
    if(like) newStockRecord.likes.push(ipAddr);
    newStockRecord.save((err, data) => {
      done(null, data);
    });
  };
}

module.exports = Stocks;