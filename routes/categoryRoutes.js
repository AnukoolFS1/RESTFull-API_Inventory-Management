const categoryRouter = require('express').Router();
const {addCategory} = require('../controller/category.control');

categoryRouter.post('/', addCategory);

categoryRouter.get('/');

categoryRouter.put('/',);

categoryRouter.delete('/',)

module.exports = categoryRouter