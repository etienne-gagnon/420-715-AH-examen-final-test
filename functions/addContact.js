function addContact(prenom, nom, telephone, email){
    if(prenom === undefined && nom === undefined && telephone === undefined && email === undefined){
        return "Aucune valeur n'a été reçu lors de la soumission";
    }else if(prenom === undefined || nom === undefined || telephone === undefined || email === undefined){
        return "Tous les champs doivent être remplis";
    }else if(prenom.trim() === "" || nom.trim() === "" || telephone.trim() === "" || email.trim() === ""){
        return "Un ou plusieurs champs sont vides";
    }else{
        return "Ajout du contact";
    }
}

module.exports = { addContact };