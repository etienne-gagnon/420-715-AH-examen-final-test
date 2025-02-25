const express = require('express');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');
const fs = require('fs');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/home.html');
});

app.get('/add-contact', (req, res) => {
    res.sendFile(__dirname + '/public/views/add-contact.html');
});

app.get('/add-contact', (req, res) => {
    res.sendFile(__dirname + '/public/views/edit-contact.html');
});


app.listen(port, () => {
    console.log('Connected ! \n http://localhost:3000');
});