const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const { PORT, BOOKING_PREFIX, AUTH_PREFIX, VERIFY_PREFIX } = process.env;
const gateway = require('fast-gateway');

app.use(cors())

app.use(express.json());

const Server = gateway({
    routes: [{
            prefix: BOOKING_PREFIX,
            target: "http://localhost:3001",
            methods: ['POST', 'GET', 'DELETE', 'PUT'],
            prefixRewrite: "",
        },
        {
            prefix: AUTH_PREFIX,
            target: "http://localhost:3003",
            methods: ['POST', 'GET', 'DELETE', 'PUT'],
            prefixRewrite: "",
        },
        {
            prefix: VERIFY_PREFIX,
            target: "http://localhost:3002",
            methods: ['POST', 'GET', 'DELETE', 'PUT'],
            prefixRewrite: ""

        }
    ]
})

Server.start(PORT, "localhost")
Server.get("/", (req, res) => {
    console.log("Microservice Server Started on Port : %s ", PORT);
    res.send("Welcome on Home Page ")
})
Server.get("/home", async(req, res) => {

    var Data = await fetch("http://localhost:3002/gettoken")
    var parseData = await Data.json();
    console.log(parseData);
    res.send(" Microservices Started ,Token ")
    console.log(Data);
})