function deleteContact(userId){
   let existingUserId = 1;

   if(userId === undefined){
        return "Le userId n'est pas défini";
   }else if(typeof userId == "string"){
        return "Le userId n'est pas valide";
   }else if(userId !== existingUserId){
        return "Le userId n'existe pas";
   }else{
        return "Le contact a été supprimé avec succès";
   }
}

module.exports = { deleteContact };