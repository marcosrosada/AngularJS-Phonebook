var express = require('express'),
    bodyParser = require('body-parser'),
 	app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


var contacts = [
	{ name: "Marcos Rosada", number: "+5521980147515", date: new Date(), company: { code: 14, name: "Oi", category: "Celular"} },
	{ name: "TALITA VESPA", number: "+5521979276633", date: new Date(), company: { code: 15, name: "Vivo", category: "Celular"} },
	{ name: "joniorrrrrr souza", number: "+552799998888", date: new Date(), company: { code: 41, name: "Tim", category: "Celular"} }
];
var companies = [
	{ code: 14, name: "Oi", category: "Celular", price: 2 },
	{ code: 15, name: "Vivo", category: "Celular", price: 1 },
	{ code: 41, name: "Tim", category: "Celular", price: 3 },
	{ code: 25, name: "GVT", category: "Fixo", price: 1 },
	{ code: 21, name: "Embratel", category: "Fixo", price: 2 }
];

const hostname  = 'localhost';
const port 		= 3000;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contacts', function(req, res) {
  	res.json(contacts);
});

app.post('/contacts', function(req, res) {
  	contacts.push(req.body);
	res.json(true);
});

app.get('/companies', function(req, res) {
  	res.json(companies);
});