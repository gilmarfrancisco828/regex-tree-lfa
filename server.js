var express = require(`express`);
var bodyParser = require(`body-parser`);
var fs = require(`fs`);
const regexpTree = require('regexp-tree');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader(`Access-Control-Allow-Origin`, `*`);
    res.setHeader(`Access-Control-Allow-Methods`, `POST`);
    res.setHeader(`Access-Control-Allow-Headers`, `content-type`);
    res.setHeader(`Content-Type`, `application/json`);
    res.setHeader(`Access-Control-Allow-Credentials`, true);
    next();
});
app.listen(8080, function () { console.log(`Servidor Web rodando na porta 9090`) });

app.post(`/api`, async (req, res) => {
    console.log(req.body);
    res.json(regexpTree.parse('/' + req.body.expression + '/i'));
});
