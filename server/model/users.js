const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    first:{
        type: String
    },
    last:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: Number
    },
    amount:{
        type: Number
    },
});

module.exports = mongoose.model("users", usersSchema);
