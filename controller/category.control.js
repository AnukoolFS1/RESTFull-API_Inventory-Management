const Categorymodel = require('../models/Category.js');

const addCategory = async (req, res) => {
    const { name, description } = req.body
    await Categorymodel.create({ name: name.toLowerCase(), description })
    res.status(201).json({ msg: "Category created" });
}

const getCategories = async (req, res) => {
    const categories = await Categorymodel.find();
    res.status(200).json(categories)
}

const getCategory = async (req, res) => {
    const { name } = req.params
    const categories = await Categorymodel.findOne({name});
    res.status(200).json(categories)
}

const editCategory = async (req, res) => {
    const {name} = req.params;
    const changingData = req.body;

    const changedCategory = await Categorymodel.findOneAndUpdate({name}, changingData) 
}
module.exports = { addCategory, getCategories, getCategory };