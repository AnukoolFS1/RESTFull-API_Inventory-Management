const Productmodel = require('../models/product');
const Categorymodel = require('../models/Category');
const Suppliermodel = require('../models/Supplier');
const addProduct = async (req, res) => {
    const { name, price, quantity, category, supplier } = req.body;
    const categoryId = await Categorymodel.findOne({ name: category }).select("_id");
    const supplierId = await Suppliermodel.findOne({ name: supplier }).select("_id");

    console.log({
        name, price, quantity, categoryId, supplierId
    })
    // const product = new Productmodel()

    // await product.save();
    res.status(201).json({ msg: "Product has created successfully" })
}


module.exports = {
    addProduct
}