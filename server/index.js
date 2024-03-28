const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const { format } = require('date-fns');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    database: process.env.MYSQLDATABASE,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
});

db.connect(function(err) {
    if (err) {
      console.log("error occured! " + err.message);
      return;
    }
    console.log("Connected!");
});

app.post("/api/createOrder", (req, res)=> {
    try {
        const q1 = "INSERT INTO trade_details (trade_data_time, stock_name, listing_price, quantity, type, price_per_unit) VALUES (?)";
        const q2 = "INSERT INTO order_master (quantity, price_per_unit, type, stock) VALUES (?)";
        db.query("BEGIN");
        
        req.body.forEach(async (item) => {
            const { stock_name, listing_price, quantity, type, price_per_unit } = item;
            const currentTime = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
            const values1 = [
                currentTime,
                stock_name,
                listing_price,
                quantity,
                type,
                price_per_unit
            ];
            const values2 = [
                quantity,
                price_per_unit,
                type,
                stock_name
            ];
            await db.query(q1, [values1]);            
            await db.query(q2, [values2]);
        });
        db.query("COMMIT");
        res.status(200).json({"message":"created"});
    } catch (error) {
        db.query("ROLLBACK");
        res.status(500).json({"error": "internal server error"});
    }
    
    // db.query(query, [values], (err, data) => {
    //     if(err) {
    //         return res.send(err);
    //     }
    //     res.send("item added");
    // })
});

const port = process.env.serverPort | 3001;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})