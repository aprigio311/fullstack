const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "app_avaliacao"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// ROTAS DE API

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM app_avaliacao.client_avaliacao";
    db.query(sqlSelect,  (err, result) => {
        res.send(result);
    })
});
    

app.post("/api/insert", (req, res) => {

    const nome = req.body.nome
    const avaliacao = req.body.avaliacao

    console.log(nome);
    console.log(avaliacao);

    const sqlInsert = "INSERT INTO client_avaliacao (nome, avaliacao) VALUES (?, ?);";
    console.log(sqlInsert);
    db.query(sqlInsert, [nome, avaliacao], (err, result) => {
        console.log(err);
        console.log(nome);
        console.log(avaliacao);
    });

});

app.listen(3001, () => {
    console.log("running on 3001");
});