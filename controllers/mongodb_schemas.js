var mongoose = require('mongoose');
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })

// DB Schemas.
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    stockSymbol: {type: String, required: true},
    likes: {type: [String], required: true},
});

// Create DB model.
let Stock = mongoose.model("stock", stockSchema);

// Export DB models.
module.exports = {Stock: Stock};