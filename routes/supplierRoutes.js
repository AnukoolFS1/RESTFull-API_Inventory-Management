const supplierRouter = require('express').Router();
const { addSupplier, getSuppliers, getSupplier, deleteSupplier, editSupplier } = require("../controller/supplier.control")

supplierRouter.post('/', addSupplier)

supplierRouter.get('/', getSuppliers)

supplierRouter.get('/:name', getSupplier)

supplierRouter.put('/:name', editSupplier)

supplierRouter.delete('/:name', deleteSupplier);

module.exports = supplierRouter