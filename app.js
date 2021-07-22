const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use(express.static('public'));

/* app.get('/home', (req, res) => {
	res.send('Home');
}); */

const params = {
		name: 'Fernando Herrera',
		title: 'Course of Node js'
	}


app.get('/', (req, res) => {
	res.render('home', params);
});


app.get('/elements', (req, res) => {
	res.render('elements', params);
});

app.get('/generic', (req, res) => {
	res.render('generic', params);
});

app.get('*', (req, res) => {
	res.render('404', params);
});

/* app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/404.html');
}); */
 
app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
})