const http = require('http');
const { app } = require("./index")


const httpServr = http.createServer(app)

httpServr.listen(8080, () => {
    console.log("Server is connected to Port:", 8080);
})
