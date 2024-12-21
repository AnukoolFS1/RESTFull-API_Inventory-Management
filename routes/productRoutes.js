const prdctRouter = require('express').Router()
const { addProduct, getProducts } = require('../controller/product.control')

prdctRouter.post('/', addProduct)

prdctRouter.get('/', getProducts)

prdctRouter.put('/')

prdctRouter.delete('/')

module.exports = prdctRouter