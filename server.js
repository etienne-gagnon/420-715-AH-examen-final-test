const express = require('express');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');
const fs = require('fs');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var contacts = fs.readFileSync('databases/contacts.json');
var contactObject = JSON.parse(contacts);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/home.html');
});


app.get('/add-contact', (req, res) => {
    res.sendFile(__dirname + '/public/views/add-contact.html');
});


// Ajouter un contact
app.post('/add-contact', (req, res) => {
        let newData = {
        "id": contactObject.length + 1, 
        "prenom": req.body.prenom,
        "nom": req.body.nom,
        "telephone": req.body.telephone,
        "email": req.body.email
    }
    contactObject.push(newData)

    let newObject = JSON.stringify(contactObject);
    fs.writeFileSync('databases/contacts.json', newObject);

    res.redirect('/');
});

// 
app.get('/edit-contact', (req, res) => {
    res.sendFile(__dirname + '/public/views/edit-contact.html');
});


app.listen(port, () => {
    console.log('Connected ! \n http://localhost:3000');
});