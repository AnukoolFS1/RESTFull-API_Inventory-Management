require('dotenv').config();
const express = require('express');
const app = express();
const Connect = require('./db/Db');
const prdctRouter = require('./routes/productRoutes.js');
const supplierRouter = require('./routes/supplierRoutes.js');
const categoryRouter = require('./routes/categoryRoutes.js');

PORT = process.env.PORT || 5000;

Connect();

app.use(express.json())

app.use('/product', prdctRouter);
app.use('/supplier', supplierRouter);
app.use("/category", categoryRouter);

app.listen(PORT, () => console.log(`server is running on PORT${PORT}`));