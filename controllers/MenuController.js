const Drink = require('../models/Drink');

class MenuController {

    // [GET] /
    menu(req, res, next) {
        Drink.find({})
            .then(drinks => {
                drinks = drinks.map(drinks => drinks.toObject());  //with handlebar, must convert drinks to Object, 1 array Document
                res.render('menu', { drinks: drinks });
            })
            .catch(next);
    }
    // [GET] /:slug
    show(req, res, next) {
        Drink.findOne({ slug: req.params.slug })  //get slug parametter from URL //One:1 document
            .then(drinks => {
                drinks = drinks.toObject();
                res.render('drinks/show', { drinks: drinks });
            })
            .catch(next);
    }

    // [GET] /create
    create(req, res, next) {
        res.render('drinks/create');
    }

    // [POST] /store
    store(req, res, next) {
        console.log(req.body);
        const newDrink = new Drink(req.body);        
        newDrink.save()
            .then(() => res.redirect('/menu'))
            .catch(error => {
                console.log('Cannot Create New Drink');
            });
    }
}

module.exports = new MenuController; 