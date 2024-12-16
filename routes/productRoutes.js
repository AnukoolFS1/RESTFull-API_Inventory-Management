const prdctRouter = require('express').Router()
const { addProduct } = require('../controller/product.control')

prdctRouter.get('/')

prdctRouter.post('/', addProduct)

prdctRouter.put()

prdctRouter.delete()

module.exports = prdctRouter