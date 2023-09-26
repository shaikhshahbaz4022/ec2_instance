const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())


app.get('/test', (req, res) => {
    res.status(200).send({ "msg": "Running Fine" })
})
app.get("/", (req, res) => {
    res.status(200).send({ 'msg': "Success Route Hit " })
})
app.listen(8000, () => {
    console.log("Server is Connected to PORT", 8000);
})