require('dotenv').config()
const mongoose = require('mongoose');

const URI = process.env.DB_URI;

const Connect = async () => {
    await mongoose.connect(URI);

    console.log("DB Connected");
}

module.exports = Connect;