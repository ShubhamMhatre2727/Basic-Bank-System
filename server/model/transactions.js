const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    from:{
        type: String
    },
    to:{
        type: String
    },
    amount:{
        type: Number
    },
    dateTime:{
        type: String
    }
});

module.exports = mongoose.model("transactions", TransactionSchema);