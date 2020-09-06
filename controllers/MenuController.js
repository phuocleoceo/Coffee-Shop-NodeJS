class MenuController {

    // [GET] /
    menu(req, res) {
        res.render('menu');
    }
}

module.exports = new MenuController;