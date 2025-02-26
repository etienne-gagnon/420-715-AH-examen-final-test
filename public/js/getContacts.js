let tbody = document.getElementById("tbody");

fetch('/api/get-contacts')
    .then((response) => response.text())
    .then((body) => {
        let contacts = JSON.parse(body);

        if(contacts.length == 0) {
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td colspan="5">Vous n'avez pas encore de contact</td>
            `;

            tbody.appendChild(tr);
        }
        
        contacts.forEach(contact => {
            let tr = document.createElement('tr');
                tr.innerHTML = `
                <td>${contact.prenom}</td>
                <td>${contact.nom}</td>
                <td>${contact.telephone}</td>
                <td>${contact.email}</td>
                <td><a href='edit-contact?id=${contact.id}'>Modifier</a> | <a onclick='deleteContact(${contact.id})'>Supprimer</a></td>
                `;

            tbody.appendChild(tr);
        });

    });