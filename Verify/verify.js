const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const { KEY, PASSWORD } = process.env;
const PORT = 3002;
const SID_Token = {
    "name": "Mayur Adlak",
    "KEY": KEY,
    "PASSWORD": PASSWORD,
}
app.listen(PORT, () => {
    console.log("Server is Started on port %d ", PORT);
})

app.get("/verify", (req, res) => {
    console.log("Authentication Microservice Called");
    res.json({ massage: "Verification Service " })
})
app.get("/gettoken", (req, res) => {
    console.log("Sombody Want to Access your SID Token ");
    res.send({ SID_Token })
})