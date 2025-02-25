const { validateContact } = require('../functions/validateContact.js');


test('Si tous les valeurs sont undefined', () => {
    expect(validateContact()).toBe("Aucune valeur n'a été reçu lors de l'envoi du formulaire");
    });

test('Si au moins un champs est undefined', () => {
    // fonction complète qui fonctionnerait: validateContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(validateContact("Étienne", "Gagnon", "111-222-3333")).toBe("Tous les champs doivent être remplis");
    expect(validateContact("Étienne", "Gagnon", "info@exemple.com")).toBe("Tous les champs doivent être remplis");
    expect(validateContact("Étienne", "111-222-3333", "info@exemple.com")).toBe("Tous les champs doivent être remplis");
    expect(validateContact( "Gagnon", "111-222-3333", "info@exemple.com")).toBe("Tous les champs doivent être remplis");
    });

test('Si un ou plusieurs champs est vide', () => {
    // fonction complète qui fonctionnerait: validateContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(validateContact("Étienne", "Gagnon", "111-222-3333", "")).toBe("Un ou plusieurs champs sont vides");
    expect(validateContact("Étienne", "Gagnon", "", "info@exemple.com")).toBe("Un ou plusieurs champs sont vides");
    expect(validateContact("Étienne", "", "111-222-3333", "info@exemple.com")).toBe("Un ou plusieurs champs sont vides");
    expect(validateContact("", "Gagnon", "111-222-3333", "info@exemple.com")).toBe("Un ou plusieurs champs sont vides");
    });


test('Le prénom n\est pas valide', () => {
    // fonction complète qui fonctionnerait: validateContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(validateContact("Étienne1", "Gagnon", "111-222-3333", "info@exemple.com")).toBe("Le prénom n'est pas valide");
    });

test('Le nom n\est pas valide', () => {
    // fonction complète qui fonctionnerait: validateContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(validateContact("Étienne", "Gagnon1", "111-222-3333", "info@exemple.com")).toBe("Le nom n'est pas valide");
    });

test('Le téléphone n\est pas valide', () => {
    // fonction complète qui fonctionnerait: validateContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(validateContact("Étienne", "Gagnon", "a11-222-3333", "info@exemple.com")).toBe("Le téléphone n'est pas valide");
    });

test('Le email n\est pas valide', () => {
    // fonction complète qui fonctionnerait: validateContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(validateContact("Étienne", "Gagnon", "111-222-3333", "infoexemple.com")).toBe("Le email n'est pas valide");
    });

test('Le contact est valide', () => {
    // fonction complète qui fonctionnerait: validateContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com") 
    expect(validateContact("Étienne", "Gagnon", "111-222-3333", "info@exemple.com") ).toBe("Le contact est valide");
    });
