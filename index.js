

// Импорт относительного пути 
// import __dirname from './dirname';

import router from './routers/router.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

// hbs
import expressHandlebars from 'express-handlebars';
const handlebars = expressHandlebars.create({
	defaultLayout: 'main', 
	extname: 'hbs'
});
import express from 'express';
let app = express();

app.use(express.static(__dirname + '/public/'))

app.use('/moscow', router)

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
	res.render('main');
});

app.get('/t', function(req, res) {
	res.render('a-template');
});

app.get('/1', function(req, res) {
	res.render('page1', { layout: 'page1'});
});



// ...



// app.get('/2', function(req, res) {
// 	res.render('page2');
// });

// app.get('/page/:page/', function(req, res) {
// 	res.render(req.params.page);
// });

// app.get('/3', function(req, res) {
// 	res.render('index', {
// 		test: 'data',
// 		layout: 'admin'
// 	});
// });

// 404 
app.use(function(req, res) {
	res.status(404).render('404', { layout: '404'});
});


// установка root папки проекта
// app.use(express.static(__dirname + 'public'))
// app.use(express.static('public'))




//  PORT
app.listen(3000, function() {
	console.log('running');
});