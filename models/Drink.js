const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Drink = new Schema({
    name: String,
    price: Number,
    img: String,
    description: String
});

module.exports=mongoose.model('Drink',Drink);