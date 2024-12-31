const prdctRouter = require('express').Router()
const { addProduct, getProducts, getProduct, editProducts, deleteProduct, getProductByCategory } = require('../controller/product.control')

prdctRouter.post('/', addProduct)

prdctRouter.get('/', getProducts)
prdctRouter.get('/:name', getProduct)
prdctRouter.get("/category/:name", getProductByCategory)

prdctRouter.put('/', editProducts)

prdctRouter.delete('/', deleteProduct)

module.exports = prdctRouter