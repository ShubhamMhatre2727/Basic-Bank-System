const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const url = "mongodb://localhost/AlienDBex";

mongoose.connect(url);
const con = mongoose.connection;
con.on("open",()=>{
    console.log('connected...')
})

const PORT = 8000;
app.use(express.json());
app.use(cors())
const routes = require('./routes/index');
app.use('/', routes);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT} http://localhost:${PORT}/`);
});