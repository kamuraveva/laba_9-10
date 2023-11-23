const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static("public"));

app.listen(3000, () => {
    console.log('Сервер запущен по адресу http://localhost:3000/index');
  });

app.get('/index', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/index', urlencodedParser, function(req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log('Полученные данные:', req.body);
    res.status(200).send('Данные успешно получены');
});