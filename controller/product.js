const Productmodel = require('../models/product');
const Categorymodel = require('../models/Category');
const Suppliermodel = require('../models/Supplier');
const addProduct = async (req, res) => {
    const { name, price, quantity, category, supplier} = req.body;
    const categoryId = await Categorymodel.findOne({name:category}).select("_id");
    const supplierId = await Suppliermodel.findOne({name:supplier}).select("_id");
    const product = new Productmodel({
        name, price, quantity, categoryId, supplierId
    })

    await product.save();
    res.status(201).send("Product has been created successfully")
}


module.exports = {
    addProduct
}