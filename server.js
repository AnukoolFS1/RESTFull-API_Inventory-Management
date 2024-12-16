require('dotenv').config()
const express = require('express');
const app = express();
const Connect = require('./db/Db');
const { routes } = require('./routes.js/route');

PORT = process.env.PORT || 5000

Connect()

app.use(('/'), routes)

app.listen(PORT, () => console.log(`server is running on PORT${PORT}`))