const categoryRouter = require('express').Router();
const {
    addCategory,
    getCategories,
    getCategory,
    editCategory,
    deleteCategory
} = require('../controller/category.control');

categoryRouter.post('/', addCategory);

categoryRouter.get('/', getCategories);
categoryRouter.get('/:name', getCategory);


categoryRouter.put('/:name', editCategory);

categoryRouter.delete('/:name', deleteCategory)

module.exports = categoryRouter