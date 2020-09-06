const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 8000;

//Inport Route
// const route=require('routes');
app.get('/', (req, res) => {
    res.send('hello');
})


//Listen port
app.listen(port, () => {
    console.log('Deploy at http://localhost:' + port);
});