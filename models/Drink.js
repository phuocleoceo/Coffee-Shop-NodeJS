const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Drink = new Schema({
    name: String,
    price: Number,
    img: String,
    description: String,
    slug: { type: String, slug: 'name' },
    videoID: String
});

module.exports = mongoose.model('Drink', Drink); 