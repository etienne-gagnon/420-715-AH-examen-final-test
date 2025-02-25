const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let page = { prenom: '', nom: '', telephone: '', email: '', message:''};

Given('that I am on the {string} page', (currentPage) => {
    if (currentPage === "add-contact") {
        page = { prenom: '', nom: '', telephone: '', email: '', message:''};
    }
});

When('I enter {string} as prenom, {string} as nom, {string} as telephone and {string} as email', (prenom,nom,telephone,email) => {
    if (prenom !== "" && nom !== "" && telephone !== "" && email !== "") {
        page.prenom = prenom;
        page.nom = nom;
        page.telephone = telephone;
        page.email = email;
    }
});

When('I press {string} button', (button) => {
    if (button === "Ajouter le contact" && page.prenom !== "" && page.nom !== "" && page.telephone !== "" && page.email !== "") {
        page.message = "Le contact à été ajouté avec succès";
    }else{
        page.message = "Une erreur est survenue lors de la création du contact";
    }
});

Then('I should see {string}', (expectedMessage) => {
    assert.strictEqual(page.message, expectedMessage);
});
