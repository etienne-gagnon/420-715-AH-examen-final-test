const { deleteContact } = require('../functions/deleteContact.js');

test('Si le userId est undefined', () => {
    // fonction complète qui fonctionnerait: deleteContact(1) 
    expect(deleteContact()).toBe("Le userId n'est pas définis");
    });
