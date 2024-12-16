const Categorymodel = require('../models/Category.js');

const addCategory = async (req, res) => {
    const { name, description } = req.body

    await Categorymodel.create({ name, description })
    res.status(201).json({ msg: "Category created" });
}

module.exports = { addCategory };