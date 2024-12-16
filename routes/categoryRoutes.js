const categoryRouter = require('express').Router();
const {addCategory} = require('../controller/category.control');

categoryRouter.get('/');

categoryRouter.post('/', addCategory);

module.exports = categoryRouter