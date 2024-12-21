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
    console.log(name)
    const changingData = req.body;
try{

    const changedCategory = await Categorymodel.findOneAndUpdate({name}, changingData)
    
    if(!changedCategory) return res.status(404).json({msg:"category was not found in server database"});
    
    res.status(200).json({msg:`data has changed with ${JSON.stringify(changingData)}`})
}catch(err) {
    console.error(err)
    res.status(500).json({msg:"internal server error"})
}
}
module.exports = { addCategory, getCategories, getCategory, editCategory };