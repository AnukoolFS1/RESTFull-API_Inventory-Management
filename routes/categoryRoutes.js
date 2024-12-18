const categoryRouter = require('express').Router();
const { addCategory, getCategories, getCategory } = require('../controller/category.control');

categoryRouter.post('/', addCategory);

categoryRouter.get('/', getCategories);
categoryRouter.get('/:name', getCategory);


categoryRouter.put('/',);

categoryRouter.delete('/',)

module.exports = categoryRouter