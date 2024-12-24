const prdctRouter = require('express').Router()
const { addProduct, getProducts, getProduct, editProducts, deleteProduct } = require('../controller/product.control')

prdctRouter.post('/', addProduct)

prdctRouter.get('/', getProducts)
prdctRouter.get('/', getProduct)


prdctRouter.put('/', editProducts)

prdctRouter.delete('/', deleteProduct)

module.exports = prdctRouter