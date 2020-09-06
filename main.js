const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 8000;

//Inport Route
const route=require('./routes');

//Use static file
app.use(express.static('public'));

//Template Engine, create engine by function then set it to view engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
//Set path view
app.set('views', 'views');

//Use route with "app" (express) parametter
route(app);

//Listen port
app.listen(port, () => {
    console.log('<< Deploy at http://localhost:' + port + ' >>');
});