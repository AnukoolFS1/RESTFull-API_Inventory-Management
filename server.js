require('dotenv').config()
const express = require('express');
const app = express();
const Connect = require('./db/Db');
const router = require('./routes/route.js');

PORT = process.env.PORT || 5000

Connect()

app.use(('/'), router)

app.listen(PORT, () => console.log(`server is running on PORT${PORT}`))