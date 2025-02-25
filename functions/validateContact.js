function validateContact(prenom, nom, telephone, email){
    let prenomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\-]+$/;
    let nomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\-]+$/;
    let telephoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(prenom === undefined && nom === undefined && telephone === undefined && email === undefined){
        return "Aucune valeur n'a été reçu lors de l'envoi du formulaire";
    }else if(prenom === undefined || nom === undefined || telephone === undefined || email === undefined){
        return "Tous les champs doivent être remplis";
    }else if(prenom.trim() === "" || nom.trim() === "" || telephone.trim() === "" || email.trim() === ""){
        return "Un ou plusieurs champs sont vides";
    }else if(!prenomRegex.test(prenom)){
        return "Le prénom n'est pas valide";
    }else if(!nomRegex.test(nom)){
        return "Le nom n'est pas valide";
    }else if(!telephoneRegex.test(telephone)){
        return "Le téléphone n'est pas valide";
    }else if(!telephoneRegex.test(telephone)){
        return "Le téléphone n'est pas valide";
    }else if(!emailRegex.test(email)){
        return "Le email n'est pas valide";
    }else{
        return "Le contact est valide";
    }
}

module.exports = { validateContact };