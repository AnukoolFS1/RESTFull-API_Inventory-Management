const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: String,
        price: { type: Number, required: true },
        quantity: { type: Number, default: 0 },
        SKU: {type: String, required: true, unique: true},
        categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
        supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' }
    }, 
    { timestamps: true}
);


module.exports = mongoose.model("Product", productSchema)