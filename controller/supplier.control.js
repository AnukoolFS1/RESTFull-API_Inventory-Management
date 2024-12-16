const Productmodel = require('../models/Supplier');

const addSupplier = async (req, res) => {
    const {companyName, contactEmail, phone} = req.body;

    await Productmodel.create({companyName, contactEmail, phone})

    res.status(201).json({msg:"Supplier has created successfully"});
}


module.exports = { addSupplier }