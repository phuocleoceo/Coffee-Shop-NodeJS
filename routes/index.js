const siteRouter = require('./site');
const menuRouter = require('./menu');

function route(app) {
    //Menu page
    app.use('/menu', menuRouter);

    //Static page
    app.use('/', siteRouter);
}

module.exports = route;

//modue export là object ( class, function,... ) sẽ đƯợc trả về khi ta reqire() module đó