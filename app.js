const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Mengatur pengaturan express app
const app = express();

// Log request ke konsol
app.use(logger('dev'));

// Parsing data request (menggunakan body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('client'));

app.use('/assets', express.static('client/assets'));

// Require routes ke aplikasi utama
require('./server/routes')(app);

// Mengatur default semua route yang mengirim kembali pesan selamat datang ke dalam format json
app.get('*', (req, res) => res.status(200).send({
    message: "Selamat datang.",
}));

module.exports = app;
