const mongoose = require('mongoose');
const config = require('../config');
const conn = async ()=>{
    await mongoose.connect(config.mongoURI)
}

conn()

module.exports = mongoose.connection