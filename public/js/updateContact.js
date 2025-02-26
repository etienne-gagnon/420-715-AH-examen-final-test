

let existingUserId = false;
let userIdInput = document.getElementById('userId');
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
                userIdInput.value = contact.id;
                prenomInput.value = contact.prenom;
                nomInput.value = contact.nom;
                telephoneInput.value = contact.telephone;
                emailInput.value = contact.email;
                existingUserId = true;
                return;
            }else{
                if(response.length === iteration) {
                    window.location.href = '/';
                }
            }
            iteration++;
        });
        
    });




let submitBtn = document.getElementById('submitBtn');
let form = document.getElementById('form');
let error = document.getElementById('error');
let validateContactStatus = false;
    
    function validateContact(prenom, nom, telephone, email){
        let prenomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\-]+$/;
        let nomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\-]+$/;
        let telephoneRegex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
        if(prenom === undefined && nom === undefined && telephone === undefined && email === undefined){
            error.innerText = "Aucune valeur n'a été reçu lors de l'envoi du formulaire";
            
        }else if(prenom === undefined || nom === undefined || telephone === undefined || email === undefined){
            error.innerText = "Tous les champs doivent être remplis";
            error.hidden = false;
        }else if(prenom.trim() === "" || nom.trim() === "" || telephone.trim() === "" || email.trim() === ""){
            error.innerText = "Un ou plusieurs champs sont vides";
            error.hidden = false;
        }else if(!prenomRegex.test(prenom)){
            error.innerText = "Le prénom n'est pas valide";
            error.hidden = false;
        }else if(!nomRegex.test(nom)){
            error.innerText = "Le nom n'est pas valide";
            error.hidden = false;
        }else if(!telephoneRegex.test(telephone)){
            error.innerText = "Le téléphone n'est pas valide (xxx-xxx-xxxx)";
            error.hidden = false;
        }else if(!emailRegex.test(email)){
            error.innerText = "Le email n'est pas valide";
            error.hidden = false;
        }else{
            validateContactStatus = true;
            error.innerText = "";
            error.hidden = true;
        }
    }
    

function updateContact(userId, prenom, nom, telephone, email){
    if(userId === undefined && prenom === undefined && nom === undefined && telephone === undefined && email === undefined){
        error.innerText = "Aucune valeur n'a été reçu lors de l'envoi du formulaire";
        error.hidden = false;
    }else if(userId === undefined ||prenom === undefined || nom === undefined || telephone === undefined || email === undefined){
        error.innerText = "Tous les champs doivent être remplis";
        error.hidden = false;
    }else if(userId === "" || prenom.trim() === "" || nom.trim() === "" || telephone.trim() === "" || email.trim() === ""){
        error.innerText = "Un ou plusieurs champs sont vides";
        error.hidden = false;
    }else if(existingUserId == false){
        error.innerText = "L'utilisateur n'existe pas";
        error.hidden = false;
    }else{
        form.submit();
        error.innerText = "";
        error.hidden = true;
    }
}


submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    let userId = document.getElementById('userId').value;;
    let prenom = document.getElementById('prenom').value;
    let nom = document.getElementById('nom').value;
    let telephone = document.getElementById('telephone').value;
    let email = document.getElementById('email').value;

    validateContact(prenom, nom, telephone, email);

    if(validateContactStatus == true){
        updateContact(userId, prenom, nom, telephone, email)
    }

});