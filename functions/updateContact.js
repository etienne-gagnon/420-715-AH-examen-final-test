function updateContact(userId, prenom, nom, telephone, email){
   let existingUserId = "1";

    if(userId === undefined && prenom === undefined && nom === undefined && telephone === undefined && email === undefined){
        return "Aucune valeur n'a été reçu lors de l'envoi du formulaire";
    }else if(userId === undefined ||prenom === undefined || nom === undefined || telephone === undefined || email === undefined){
        return "Tous les champs doivent être remplis";
    }else if(userId.trim() === "" || prenom.trim() === "" || nom.trim() === "" || telephone.trim() === "" || email.trim() === ""){
        return "Un ou plusieurs champs sont vides";
    }else if(userId !== existingUserId){
        return "L'utilisateur n'existe pas";
    }else{
        return "Contact modifié avec succès";
    }
}

module.exports = { updateContact };