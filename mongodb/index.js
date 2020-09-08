const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/coffee-shop', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect DB Successfully!');
    }
    catch (error) {
        console.log('Connect DB Fail');
    }
};

module.exports = { connect };