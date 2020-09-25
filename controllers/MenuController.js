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
        res.json(req.body);
        console.log(req.boby);
         
        // res.send('OK');        
        // const drink = new Drink(req.boby);
        // drink.save()
        //     .then(() => res.redirect('/menu'))
        //     .catch(error => {

        //     });
    }
}

module.exports = new MenuController; 