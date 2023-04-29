const express = require('express');

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
    console.log("Server is Started on port %d ", PORT);
})

app.get("/book", (req, res) => {
    console.log(" Bookig Microservice Called");
    res.json({ massage: "Booking Service " })
})