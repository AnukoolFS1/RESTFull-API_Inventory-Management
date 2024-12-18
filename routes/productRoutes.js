const prdctRouter = require('express').Router()
const { addProduct } = require('../controller/product.control')

prdctRouter.post('/', addProduct)

prdctRouter.get('/')

prdctRouter.put('/')

prdctRouter.delete('/')

module.exports = prdctRouter