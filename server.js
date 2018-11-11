const express = require('express')
const api = require('./api');
const parser = require('./parser');

const app = express()
const port = 4000

app.get('/', getCities)

function getCities(req, res) {
    api.fetchPage()
    .then(response => response.json())
    .then(result => res.send(parser.parse(result.parse.text['*']))
    );
}

app.listen(port, () => console.log(`App listening on port ${port}!`))