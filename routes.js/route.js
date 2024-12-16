const { addProduct } = require('../controller/product')

const route = require('express').Router()

route.get('/')

route.post('/', addProduct)

route.put()

route.delete()

module.exports = route