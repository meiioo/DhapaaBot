var express = require('express')
var ejs = require('ejs')

var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(8080);

app.get('/', function(req,res){

    res.render('pages/index'); 

    // Route untuk /about
app.get('/about', (req, res) => {
    res.render('pages/about'); // Pastikan ada views/pages/about.ejs
});

// Route untuk /contact
app.get('/contact', (req, res) => {
    res.render('pages/contact'); // Pastikan ada views/pages/contact.ejs
});

});