const router = require('express').Router()
const { addProduct } = require('../controller/product')

router.get('/')

router.post('/', addProduct)

router.put()

router.delete()

module.exports = router