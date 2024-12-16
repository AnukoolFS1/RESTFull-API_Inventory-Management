const supplierRouter = require('express').Router();
const { addSupplier } = require("../controller/supplier.control")
supplierRouter.get('/')

supplierRouter.post('/', addSupplier)


module.exports = supplierRouter