const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    companyName: {type:String, required: true, lowercase: true},
    contactEmail: String,
    phone: String
});

module.exports = mongoose.model("Supplier", supplierSchema);