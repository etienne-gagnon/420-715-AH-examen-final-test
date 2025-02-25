let submitBtn = document.getElementById('submitBtn');
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

function addContact(prenom, nom, telephone, email){
    if(prenom === undefined && nom === undefined && telephone === undefined && email === undefined){
        error.innerText = "Aucune valeur n'a été reçu lors de l'envoi du formulaire";
        error.hidden = false;
    }else if(prenom === undefined || nom === undefined || telephone === undefined || email === undefined){
        error.innerText = "Tous les champs doivent être remplis";
        error.hidden = false;
    }else if(prenom.trim() === "" || nom.trim() === "" || telephone.trim() === "" || email.trim() === ""){
        error.innerText = "Un ou plusieurs champs sont vides";
        error.hidden = false;
    }else{
        console.log("Contact ajouter");
        error.innerText = "";
        error.hidden = true;
    }
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    let prenom = document.getElementById('prenom').value;
    let nom = document.getElementById('nom').value;
    let telephone = document.getElementById('telephone').value;
    let email = document.getElementById('email').value;

    validateContact(prenom, nom, telephone, email);

    if(validateContactStatus == true){
        addContact(prenom, nom, telephone, email)
    }

});