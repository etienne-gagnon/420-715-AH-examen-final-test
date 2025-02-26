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

// Get contacts
app.get('/api/get-contacts', (req, res) => {
    res.json(contactObject);
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


app.get('/edit-contact', (req, res) => {
    res.sendFile(__dirname + '/public/views/edit-contact.html');
});


// Modifier un contact
app.post('/edit-contact', (req, res) => {

    let iteration = 1;
    let contactUpdated = false;

    contactObject.forEach(contact => {
        if (parseInt(contact.id) === parseInt(req.body.userId)) {
            contact.prenom = req.body.prenom;
            contact.nom = req.body.nom;
            contact.telephone = req.body.telephone;
            contact.email = req.body.email;

            contactUpdated = true;
            return;
        }

        if (contactObject.length === iteration && !contactUpdated) {
            console.log("Contact not found");
            res.redirect("/");
        }

        iteration++;
    });

    if (contactUpdated) {
        let updatedContacts = JSON.stringify(contactObject, null, 2);
        fs.writeFileSync('databases/contacts.json', updatedContacts);

        console.log("Contact updated and saved!");
        res.redirect("/");
    }
});

// Delete un Contact

app.get('/delete-contact', (req, res) => {
    let contactId = parseInt(req.query.id);

    let contactIndex = contactObject.findIndex(contact => contact.id === contactId);

    if (contactIndex !== -1) {
        contactObject.splice(contactIndex, 1);

        let newObject = JSON.stringify(contactObject, null, 2);
        fs.writeFileSync('databases/contacts.json', newObject);

        res.redirect('/');
    } else {
        res.redirect('/');
    }
});





app.listen(port, () => {
    console.log('Connected ! \n http://localhost:3000');
});