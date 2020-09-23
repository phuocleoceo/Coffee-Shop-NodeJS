const Drink = require('../models/Drink');

class MenuController {

    // [GET] /
    menu(req, res, next) {
        Drink.find({})
            .then(drinks => {
                drinks = drinks.map(drinks => drinks.toObject());  //with handlebar, must convert drinks to Object
                res.render('menu', { drinks: drinks });
            })
            .catch(next);
    }
    // [GET] /:slug
    show(req, res, next) {
        Drink.findOne({ slug: req.params.slug })  //get slug parametter from URL
            .then(drinks => {
                drinks = drinks.toObject();
                res.render('drinks_detail/show',{ drinks: drinks });
            })
            .catch(next);
    }
}

module.exports = new MenuController; 