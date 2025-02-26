const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let page = { prenom: '', nom: '', telephone: '', email: '', userId: '', message:''};

Given('that user3 am on the {string} page', (currentPage) => {
    if (currentPage === "edit-contact") {
        page = { prenom: '', nom: '', telephone: '', email: '', userId: '', message:''};
    }
});

When('user3 enter {string} as prenom, {string} as nom, {string} as telephone, {string} as email and the userId {string}' , (prenom,nom,telephone,email, userId) => {
    if (prenom !== "" && nom !== "" && telephone !== "" && email !== "" && userId === "existe") {
        page.prenom = prenom;
        page.nom = nom;
        page.telephone = telephone;
        page.email = email;
        page.userId = true;
    }
});

When('user3 press {string} button', (button) => {
    if (button === "Mettre à jour le contact" && page.prenom !== "" && page.nom !== "" && page.telephone !== "" && page.email !== "" && page.userId === true) {
        page.message = "Le contact à été mis à jour avec succès";
    }else{
        page.message = "Une erreur est survenue lors de la mise à jour du contact";
    }
});

Then('user3 should see {string}', (expectedMessage) => {
    assert.strictEqual(page.message, expectedMessage);
});
