require('dotenv').config()
const express = require('express');
const app = express();
const Connect = require('./db/Db')

PORT = process.env.PORT || 5000

Connect()


app.use(('/'), (req, res) => {
    res.end("This is server")
})


app.listen(PORT, () => console.log(`server is running on PORT${PORT}`))