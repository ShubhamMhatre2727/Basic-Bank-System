const router = require("express").Router();
const users = require("../model/users")
const transactions = require("../model/transactions")
const request = require('request')

router.get('/', (req, res)=>{
    
    res.send("Hello World !");
});

// getting users data
router.get("/users", async(req, res)=>{
    const data = await users.find();
    res.json(data)
});

router.get("/user/:id", async(req, res)=>{
    const data = await users.findById(req.params["id"]);
    res.json(data)
});

router.get("/transactions", async(req, res)=>{
    const data = await transactions.find();
    res.json(data)
})

// Adding transaction History
const addTransaction = (From, To, Amount)=>{
    request('http://worldtimeapi.org/api/timezone/Asia/Kolkata', { json: true },async (err, res) => {
        if (err) { return console.log(err); }
        //   console.log(res.body.datetime);
        const date = new Date(res.body.datetime)
        const dateTime = new Intl.DateTimeFormat('en-IN', { timeZone: "Asia/Kolkata", dateStyle: 'full', timeStyle: 'long' }).format(date)
  
        const transaction = new transactions({
            from: From,
            to: To,
            amount: Amount,
            dateTime: dateTime
        });
        const data  = await transaction.save();
    });
}


// perform transactions
router.patch("/user/:from/:to/:amnt", async(req, res)=>{
    const from = await users.findById(req.params["from"]);
    const to = await users.findById(req.params["to"]);
    const amnt = parseInt(req.params["amnt"]);
    addTransaction(`${from.first} ${from.last}`, `${to.first} ${to.last}` , amnt);
    
    from.amount -= amnt;
    to.amount += amnt;
    const fromData = await from.save();
    const toData = await to.save();

    const data = [fromData, toData];
    res.send(data);
})

module.exports = router;