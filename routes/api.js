'use strict';
const Stocks = require('../controllers/stock_controller.js');

module.exports = function (app) {

  let stocks = new Stocks();

  app.route('/api/stock-prices')
    .get(function (req, res){
      let { stock } = req.query;
      let { like } = req.query;
      let ipAddr = req.connection.remoteAddress;

      if(like == 'true') like = true;
      else like = false;

      stocks.getStockData(stock, like, ipAddr, (err, stockData) => {
        if(err) return res.json({error: 'Something went wrong'})
        res.json({
          stockData: stockData
        });
      });

    });
    
};
