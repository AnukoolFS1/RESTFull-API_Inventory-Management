const categoryRouter = require('express').Router();
const { addCategory, getCategories, getCategory, editCategory } = require('../controller/category.control');

categoryRouter.post('/', addCategory);

categoryRouter.get('/', getCategories);
categoryRouter.get('/:name', getCategory);


categoryRouter.put('/:name', editCategory);

categoryRouter.delete('/',)

module.exports = categoryRouter