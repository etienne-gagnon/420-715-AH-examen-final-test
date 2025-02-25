const { addContact } = require('../functions/addContact.js');

test('Si tous les valeurs sont undefined', () => {
    expect(addContact()).toBe("Aucune valeur n'a été reçu lors de l'envoi du formulaire");
    });

test('Si au moins un champs est undefined', () => {
    // fonction complète qui fonctionnerait: updateContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(addContact("Étienne", "Gagnon", "111-222-3333")).toBe("Tous les champs doivent être remplis");
    expect(addContact("Étienne", "Gagnon", "info@exemple.com")).toBe("Tous les champs doivent être remplis");
    expect(addContact("Étienne", "111-222-3333", "info@exemple.com")).toBe("Tous les champs doivent être remplis");
    expect(addContact( "Gagnon", "111-222-3333", "info@exemple.com")).toBe("Tous les champs doivent être remplis");
    });

test('Si un ou plusieurs champs est vide', () => {
    // fonction complète qui fonctionnerait: updateContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(addContact("Étienne", "Gagnon", "111-222-3333", "")).toBe("Un ou plusieurs champs sont vides");
    expect(addContact("Étienne", "Gagnon", "", "info@exemple.com")).toBe("Un ou plusieurs champs sont vides");
    expect(addContact("Étienne", "", "111-222-3333", "info@exemple.com")).toBe("Un ou plusieurs champs sont vides");
    expect(addContact("", "Gagnon", "111-222-3333", "info@exemple.com")).toBe("Un ou plusieurs champs sont vides");
    });

test('Tout est beau et le contact est ajouté', () => {
            expect(addContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com") ).toBe("Ajout du contact");
    });