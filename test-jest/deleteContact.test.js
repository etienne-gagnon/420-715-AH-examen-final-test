const { deleteContact } = require('../functions/deleteContact.js');

test('Si le userId est undefined', () => {
    // fonction complète qui fonctionnerait: deleteContact(1) 
    expect(deleteContact()).toBe("Le userId n'est pas défini");
    });

test('Si le userId n\est pas valide', () => {
    // fonction complète qui fonctionnerait: deleteContact(1) 
    expect(deleteContact("1")).toBe("Le userId n'est pas valide");
    });

test('Si le userId n\est pas valide', () => {
    // fonction complète qui fonctionnerait: deleteContact(1) 
    expect(deleteContact(2)).toBe("Le userId n'existe pas");
    });


test('Le contact à été supprimé avec succès', () => {
    // fonction complète qui fonctionnerait: deleteContact(1) 
    expect(deleteContact(1)).toBe("Le contact a été supprimé avec succès");
    });