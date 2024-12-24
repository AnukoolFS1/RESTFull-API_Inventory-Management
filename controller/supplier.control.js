const SupplierModel = require('../models/Supplier');

const addSupplier = async (req, res) => {
    const { companyName, contactEmail, phone } = req.body;
    try {
        await SupplierModel.create({ companyName, contactEmail, phone })
        res.status(201).json({ msg: "Supplier has created successfully" });
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: "internal server error" })
    }
}

const getSuppliers = async (req, res) => {
    try {
        const suppliers = await SupplierModel.find();
        res.status(200).json(suppliers)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: "internal server error" })
    }
}

const getSupplier = async (req, res) => {
    try {
        const { name } = req.params;
        const supplier = await SupplierModel.findOne(name);
        res.status(200).json(supplier)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: "internal server error" })
    }
}

const editSupplier = async (req, res) => {
    try{
        const supplier = req.params.name;
        const changes = req.body;
        const changed = await SupplierModel.findOneAndUpdate({ name: supplier }, changes)
        res.status(200).json(changed)
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"internal server error"})
    }
}

const deleteSupplier = async (req, res) => {
    try{
        const {name} = req.params;
        const deleteSupplier = await SupplierModel.deleteOne(name)
        res.status(200).json(deleteSupplier)
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"internal server error"})
    }
}

module.exports = { addSupplier, getSuppliers, getSupplier, editSupplier, deleteSupplier }