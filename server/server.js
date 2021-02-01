const express = require('express');

const app = express();
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('App started on port 3000');
});

/*app.get('/public', function (req, res)
 {
  res.render('index.html', {});
console.log('get request accessed public');
});
app.get('/src', function (req, res)
 {
console.log('get request accessed src');
  res.render('index.html', {});
});*/

app.get('/', function (req, res)
 {
	console.log('get request accessed');
  res.render('index.html', {});
});

