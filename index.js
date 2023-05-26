import router from './routers/router.js';
// import routerVolgograd from './routers/volgograd/router.js';
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

// ROUTING:
app.use('/', router);


app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');




// 404 
app.use(function(req, res) {
	res.status(404).render('pages/404', { layout: '404', title: '404 ошибка - такой страницы не найдено!', 
	description: 'Такой страницы нет на сайте! Ошибка 404.'});
});


//  PORT
app.listen(3000, function() {
	console.log('running');
});