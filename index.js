const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).send(`<h1>EC2 Launced Succesfully</h1>`)
})
app.listen(8000, () => {
    console.log("Server is Connected to PORT", 8000);
})