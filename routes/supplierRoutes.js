const supplierRouter = require('express').Router();
const { addSupplier } = require("../controller/supplier.control")

supplierRouter.post('/', addSupplier)

supplierRouter.get('/')

supplierRouter.put('/')

supplierRouter.delete('/');

module.exports = supplierRouter