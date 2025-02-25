const { updateContact } = require('../functions/updateContact.js');

test('Si tous les valeurs sont undefined', () => {
    // fonction complète qui fonctionnerait: updateContact(1, "Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(updateContact()).toBe("Aucune valeur n'a été reçu lors de l'envoi du formulaire");
    });

test('Si au moins un champs est undefined', () => {
    // fonction complète qui fonctionnerait: updateContact(1, "Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(updateContact(1, "Étienne", "Gagnon", "111-222-3333")).toBe("Tous les champs doivent être remplis");
    expect(updateContact(1, "Étienne", "Gagnon", "info@exemple.com")).toBe("Tous les champs doivent être remplis");
    expect(updateContact(1, "Étienne", "111-222-3333", "info@exemple.com")).toBe("Tous les champs doivent être remplis");
    expect(updateContact(1, "Gagnon", "111-222-3333", "info@exemple.com")).toBe("Tous les champs doivent être remplis");
    expect(updateContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com")).toBe("Tous les champs doivent être remplis");
    });

test('Si un ou plusieurs champs est vide', () => {
    // fonction complète qui fonctionnerait: updateContact(1, "Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(updateContact(1, "Étienne", "Gagnon", "111-222-3333", "")).toBe("Un ou plusieurs champs sont vides");
    expect(updateContact(1, "Étienne", "Gagnon", "", "info@exemple.com")).toBe("Un ou plusieurs champs sont vides");
    expect(updateContact(1, "Étienne", "", "111-222-3333", "info@exemple.com")).toBe("Un ou plusieurs champs sont vides");
    expect(updateContact(1, "", "Gagnon", "111-222-3333", "info@exemple.com")).toBe("Un ou plusieurs champs sont vides");
    expect(updateContact("", "Étienne", "Gagnon", "111-222-3333", "info@exemple.com")).toBe("Un ou plusieurs champs sont vides");
    });

test('Si le user n\'existe pas', () => {
        // fonction complète qui fonctionnerait: updateContact(1, "Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
        expect(updateContact(2, "Étienne", "Gagnon", "111-222-3333", "info@exemple.com")).toBe("L'utilisateur n'existe pas");
        });

test('Tout est beau et le contact est mis à jour', () => {
            expect(updateContact(1, "Étienne", "Gagnon", "111-222-3333", "info@exemple.com") ).toBe("Contact modifié avec succès");
    });
