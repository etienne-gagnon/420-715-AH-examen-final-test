const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let page = { userId: '', message:''};

Given('that user2 am on the {string} page', (currentPage) => {
    if (currentPage === "contact") {
        page = { userId: '', message:''};
    }
});

When('user2 enter {string} as userId' , (userId) => {
    if (userId !== "") {
        page.userId = true;
    }
});

When('user2 press {string} button', (button) => {
    if (button === "Supprimer le contact" && page.prenom !== "" && page.nom !== "" && page.telephone !== "" && page.email !== "" && page.userId == true) {
        page.message = "Le contact à été supprimé avec succès";
    }else{
        page.message = "Une erreur est survenue lors de la suppression du contact";
    }
});

Then('user2 should see {string}', (expectedMessage) => {
    assert.strictEqual(page.message, expectedMessage);
});
