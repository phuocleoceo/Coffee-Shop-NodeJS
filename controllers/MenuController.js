const Drink = require('../models/Drink');
class MenuController {

    // [GET] /
    menu(req, res) {
        // res.render('menu');
        Drink.find({}, function (err, drinks) {
            if (!err) res.json(drinks);
            else {
                res.status(400).json({ error: 'Error!!!!' });
            }
        });
    }
}

module.exports = new MenuController;