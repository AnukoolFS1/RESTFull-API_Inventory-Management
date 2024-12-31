const Productmodel = require('../models/product');
const Categorymodel = require('../models/Category');
const Suppliermodel = require('../models/Supplier');

const addProduct = async (req, res) => {
    try{
        const { name, price, quantity, category, supplier } = req.body;
        const categoryId = await Categorymodel.findOne({ name: category }).select("_id");
        const supplierId = await Suppliermodel.findOne({ companyName: supplier }).select("_id");
        if(!supplierId && !categoryId) return res.status(400).json({msg:"Supplier or Category are not available right now"})
        const product = new Productmodel({
        name, price, quantity, categoryId: categoryId._id, supplierId: supplierId._id
        }) 
    
        await product.save();
        res.status(201).json({ msg: "Product has created successfully" })
    }catch(err){
        console.log(err);
        return res.status(500).json({msg:"Internal server error"})
    }
}

const getProducts = async (req, res) => {
    try{
        const products = await Productmodel.find().populate("categoryId").populate("supplierId");
        return res.status(200).json({products})
    }catch(err) {
        console.log(err);
        return res.status(500).json({msg:"Internal server error"})
    }
}

const getProduct = async (req, res) => {
    const {name} = req.params
    try{
        const products = await Productmodel.find({name});
        return res.status(200).json({products})
    }catch(err) {
        console.log(err);
        return res.status(500).json({msg:"Internal server error"})
    }
}

const getProductByCategory = async (req, res) => {
    const {name} = req.params;
    console.log(name)
    try {
        const categoryId = await Categorymodel.findOne({ name }).select("_id");
        if (!categoryId) {
            return res.status(400).json({ msg: "Category not found" });
        }
        const products = await Productmodel.find({})
        .populate([{path:'categoryId',select: "name description"}, {path:"supplierId", select: "companyName phone contactEmail"}]);
        return res.status(200).json({ products });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Internal server error" });
    }
};

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
    editProducts,
    getProductByCategory
}




// async function update (err, products){
//     if (err) return console.error(err);
    
//     const updatedProducts = await Productmodel.find();
//     updatedProducts.forEach(async product => {
//       const randomSKU = Math.floor(Math.random() * 1000);  // Unique random SKU generation
//       await Productmodel.updateOne({ _id: product._id }, { $set: { SKU: randomSKU } });
//     })
// }
// update()
