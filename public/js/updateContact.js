

let existingUserId = false;
let prenomInput = document.getElementById('prenom');
let nomInput = document.getElementById('nom');
let telephoneInput = document.getElementById('telephone');
let emailInput = document.getElementById('email');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let userId = urlParams.get('id');

fetch('/api/get-contacts')
    .then((response) => response.text())
    .then((body) => {
        let response = JSON.parse(body);
        let iteration = 1;
        response.forEach(contact => {
            
            if(parseInt(contact.id) == parseInt(userId)) {
                prenomInput.value = contact.prenom;
                nomInput.value = contact.nom;
                telephoneInput.value = contact.telephone;
                emailInput.value = contact.email;
                return;
            }else{
                if(response.length === iteration) {
                    window.location.href = '/';
                }
            }
            iteration++;
        });
        
    });


function updateContact(userId, prenom, nom, telephone, email){
    if(userId === undefined && prenom === undefined && nom === undefined && telephone === undefined && email === undefined){
        return "Aucune valeur n'a été reçu lors de l'envoi du formulaire";
    }else if(userId === undefined ||prenom === undefined || nom === undefined || telephone === undefined || email === undefined){
        return "Tous les champs doivent être remplis";
    }else if(userId === "" || prenom.trim() === "" || nom.trim() === "" || telephone.trim() === "" || email.trim() === ""){
        return "Un ou plusieurs champs sont vides";
    }else if(existingUserId == false){
        return "L'utilisateur n'existe pas";
    }else{
        return "Contact modifié avec succès";
    }
}
