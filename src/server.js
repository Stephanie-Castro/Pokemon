const express = require('express');
const app = express();
const dataBase = require('./database');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : true }))

app.get('/pokemons', (req, res) => {
    res.send(dataBase.mostrarPokemons());
});

app.get('/pokemon/:id', (req, res) => {
    res.send(dataBase.mostrarPokemon(req.params.id));
});

app.post('/pokemons', (req, res) => {
    const pokemon = dataBase.salvarPokemon({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    });

    res.send(pokemon);
});

app.put('/atualizarpokemon/:id', (req, res) => {
    const pokemon = dataBase.atualizarPokemon(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        id: parseInt(req.params.id), 
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    });

    res.send(pokemon);
});

app.delete('/deletarpokemon/:id', (req, res) => {
    res.send(dataBase.deletarPokemon(req.params.id));
});

app.post('/batalhapokemon', (req, res) => {
    res.send(dataBase.batalhaPokemon(req.body.id1 , req.body.id2));
});

app.post('/curarpokemon/:id', (req, res) => {
    res.send(dataBase.curarPokemon(req.params.id));
});


app.listen(3003);