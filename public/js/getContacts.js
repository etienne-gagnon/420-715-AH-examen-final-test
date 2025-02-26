let tbody = document.getElementById("tbody");

fetch('/api/get-contacts')
    .then((response) => response.text())
    .then((body) => {
        let contacts = JSON.parse(body);

        contacts.forEach(contact => {
            let tr = document.createElement('tr');
                tr.innerHTML = `
                <td>${contact.prenom}</td>
                <td>${contact.nom}</td>
                <td>${contact.telephone}</td>
                <td>${contact.email}</td>
                <td><a href='edit-contact?id=${contact.id}'>Modifier</a> | <a>Supprimer</a></td>
                `;

            tbody.appendChild(tr);
        });

    });