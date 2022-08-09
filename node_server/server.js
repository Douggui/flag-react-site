const express = require('express');
const bodyParser = require('body-parser');
var connection = require('express-myconnection');
var mysql = require('mysql');
const http = require('http');
const app = express();
const server = http.createServer(app);




app.use(bodyParser.json());

app.use(
    connection(mysql, {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3060,
        database: 'appreact',

    }, 'pool'));

app.post('/add_comment', (req, res) => {
    let { author, comment } = req.body;

    if (!author) return res.status(400).json('l\'auteur ne peut pas être vide');
    if (!comment) return res.status(400).json('le commentaire  ne peut pas être vide');

    var data = {
        author: author,
        comment: comment
    }

    var query = connection.query("INSERT INTO comment set ? ", data, function (err, rows) {

        if (err) {
            res.status(400).json('Erreur lors de l\'ajout du data ')
            console.log("erreur lors de l'insertion" + err);
        } else {
            res.status(200).json("commentaire ajouter avec succée ")
        }
    });
});

server.listen(3003, () => {
    console.log('server tourne sur le port 3080');
});





