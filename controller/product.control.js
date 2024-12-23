const Productmodel = require('../models/product');
const Categorymodel = require('../models/Category');
const Suppliermodel = require('../models/Supplier');
const addProduct = async (req, res) => {
    const { name, price, quantity, category, supplier } = req.body;
    const categoryId = await Categorymodel.findOne({ name: category }).select("_id");
    const supplierId = await Suppliermodel.findOne({ companyName: supplier }).select("_id");

    const product = new Productmodel({
        name, price, quantity, categoryId: categoryId._id, supplierId: supplierId._id
    })

    await product.save();
    res.status(201).json({ msg: "Product has created successfully" })
}

const getProducts = async (req, res) => {
    try{
        const products = await Productmodel.find();
        return res.status(200).json({products})
    }catch(err) {
        console.log(err);
        return res.status(500).json({msg:"Internal server error"})
    }
}

const getProduct = async (req, res) => {
    const {name} = req.params
    try{
        const products = await Productmodel.findOne({name});
        return res.status(200).json({products})
    }catch(err) {
        console.log(err);
        return res.status(500).json({msg:"Internal server error"})
    }
}

const editProducts = async (req, res) => {
    const {name} = req.params;
    const edits = req.body
    try{
        const editedProduct = await Productmodel.findOneAndUpdate({name}, {$set:edits}, {returnDocument: "after"}) 
        res.status(200).json({msg:"product has edited successfully"},editedProduct)
    }catch(err) {
        console.log(err);
        return res.status(500).json({msg:"Internal server error"})
    }
}

const deleteProduct = async(req, res) => {
    const {name} = req.params;
    await Productmodel.deleteOne({name});
    res.status(200).json({msg:"product has deleted"})
}

module.exports = {
    addProduct,
    getProducts,
    getProduct,
    deleteProduct,
    editProducts
}