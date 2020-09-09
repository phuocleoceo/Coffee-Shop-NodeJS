const Drink = require('../models/Drink');

class MenuController {

    // [GET] /
    menu(req, res, next) {
        Drink.find({})
            .then(drinks => {
                drinks=drinks.map(drinks=>drinks.toObject())
                res.render('menu', { drinks: drinks }) 
            })
            .catch(next);
    }
}

module.exports = new MenuController; 