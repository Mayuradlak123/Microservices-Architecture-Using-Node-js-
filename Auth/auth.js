const express = require('express');

const app = express();

const PORT = 3003;

app.listen(PORT, () => {
    console.log("Server is Started on port %d ", PORT);
})
app.get("/auth", (req, res) => {
    console.log("Auth Microservices Called ");
    req.setTimeout(3000)
        // This Request is Expire in 3 Second 
        // That thing is used for mobile OTP and session out Implementation 
})